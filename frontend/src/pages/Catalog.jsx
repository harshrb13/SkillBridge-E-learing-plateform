import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import Footer from "../components/common/Footer"
import Course_Card from "../components/core/Catalog/Course_Card"
import Course_Slider from "../components/core/Catalog/Course_Slider"
import { apiConnector } from "../services/apiconnector"
import { categories } from "../services/apis"
import { getCatalogPageData } from "../services/operations/pageAndComponentDatas"
import Error from "./Error"

function Catalog() {
  const { loading } = useSelector((state) => state.profile)
  const { catalogName } = useParams()
  const [active, setActive] = useState(1)
  const [catalogPageData, setCatalogPageData] = useState(null)
  const [categoryId, setCategoryId] = useState("")

  // Fetch All Categories
  useEffect(() => {
    const fetchCategoryId = async () => {
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        const category_id = res?.data?.data?.find(
          (ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName
        )?._id
        setCategoryId(category_id || "")
      } catch (error) {
        console.error("Could not fetch Categories:", error)
      }
    }
    fetchCategoryId()
  }, [catalogName])

  // Fetch Catalog Page Data
  useEffect(() => {
    if (categoryId) {
      const fetchCatalogData = async () => {
        try {
          const res = await getCatalogPageData(categoryId)
          setCatalogPageData(res)
        } catch (error) {
          console.error("Could not fetch catalog page data:", error)
        }
      }
      fetchCatalogData()
    }
  }, [categoryId])
  // catalogPageData?.data?.mostSellingCourses?.slice(0, 4).forEach((course, i) => {
  //   console.log(`Course ${i + 1} Data:`, course);
  // });
  

  if (loading || !catalogPageData) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  if (!loading && !catalogPageData?.success) {
    return <Error />
  }

  return (
    <>
      {/* Hero Section */}
      <div className="box-content bg-richblack-800 px-4">
        <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent">
          <p className="text-sm text-richblack-300">
            {`Home / Catalog / `}
            <span className="text-yellow-25">
              {catalogPageData?.data?.selectedCategory?.name}
            </span>
          </p>
          <p className="text-3xl text-richblack-5">
            {catalogPageData?.data?.selectedCategory?.name}
          </p>
          <p className="max-w-[870px] text-richblack-200">
            {catalogPageData?.data?.selectedCategory?.description}
          </p>
        </div>
      </div>
      <div className="px-4">
        {/* Section 1 */}
        <div className="mx-auto box-content w-full max-w-maxContentTab  py-12 lg:max-w-maxContent">
        <div className="section_heading text-richblack-5 text-2xl">Courses to get you started</div>
        <div className="my-4 flex border-b border-b-richblack-600 text-sm">
          <p
            className={`px-4 py-2 ${
              active === 1
                ? "border-b border-b-yellow-25 text-yellow-25"
                : "text-richblack-50"
            } cursor-pointer`}
            onClick={() => setActive(1)}
          >
            Most Popular
          </p>
          <p
            className={`px-4 py-2 ${
              active === 2
                ? "border-b border-b-yellow-25 text-yellow-25"
                : "text-richblack-50"
            } cursor-pointer`}
            onClick={() => setActive(2)}
          >
            New
          </p>
        </div>
        <Course_Slider Courses={catalogPageData?.data?.selectedCategory?.courses} />
      </div>

      {/* Section 2 */}
      <div className="mx-auto box-content w-full max-w-maxContentTab  py-12 lg:max-w-maxContent">
        <div className="section_heading text-richblack-5 text-2xl">
          Top courses in {catalogPageData?.data?.differentCategory?.name}
        </div>
        <div className="py-8">
          <Course_Slider Courses={catalogPageData?.data?.differentCategory?.courses} />
        </div>
      </div>

      {/* Section 3 */}
      <div className="mx-auto box-content w-full max-w-maxContentTab  py-12 lg:max-w-maxContent">
        <div className="section_heading text-richblack-5 text-2xl">Frequently Bought</div>
        <div className="py-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {catalogPageData?.data?.mostSellingCourses
              ?.slice(0, 4)
              .map((course, i) => (
                <Course_Card course={course} key={i}  Height={"h-[200px] sm:h-[400px]"} />
              ))}
          </div>
        </div>
      </div>
      </div>
      
      

      <Footer />
    </>
  )
}

export default Catalog