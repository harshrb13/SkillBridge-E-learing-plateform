export default function GetAvgRating(ratingArr) {
  if (!ratingArr || !Array.isArray(ratingArr) || ratingArr.length === 0) return 0;

  const totalReviewCount = ratingArr.reduce((acc, curr) => {
    const rating = parseFloat(curr.rating);
    // console.log(rating)
    return isNaN(rating) ? acc : acc + rating;
  }, 0);

  return Math.round((totalReviewCount / ratingArr.length) * 10) / 10;
}
