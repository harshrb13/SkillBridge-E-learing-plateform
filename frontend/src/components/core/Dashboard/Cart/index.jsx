import { useSelector } from "react-redux"
import RenderCartCourses from "./RenderCartCourses";

import RenderTotalAmount from "./RenderTotalAmount";



export default function Cart() {

    const {total, totalItems} = useSelector((state) => state.cart);

    return(
        <div className="text-white ">
        <h1 className="mb-3">
            Your Cart
        </h1>
        <p className="mb-3">{totalItems} Courses  in Cart</p>

        {total > 0 
        ? (<div>
            <RenderCartCourses/>
            <RenderTotalAmount/>
        </div>)
        :(<div>
            <p className="text-white text-4xl font-semibold">
                Your Cart is Empty
            </p>
        </div>)}
    </div>
    )
    
}