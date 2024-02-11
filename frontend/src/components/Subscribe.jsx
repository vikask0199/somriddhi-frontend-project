

const Subscribe = () => {
  return (
    <div className="px-5 md:px-28 py-8 bg-[#f0f0f0]">
      <div className="bg-white rounded-xl flex p-10 gap-10 items-center flex-col md:flex-row">
        <div className="p-10 flex items-center justify-center rounded-xl bg-[#f0f0f0] h-[500px] md:w-1/2">
          <img className="h-full " src="https://s3-alpha-sig.figma.com/img/5888/96a7/a5221c9da191a09eb28aa8c0986eb619?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f09G8S0qk2dZKquJV-mih6CuMN5QfQ8LCSoD8MMXZ4vgLp7TN81VsLOZ6vRJ9rsx4t48r3R3KDpqIt-jMpRiq95qheIujvOEvXVVEWT484AfzFOd-5ZzCoFng-IGTY7LB2b1tM93nhqoibLXZtc1X5aVWvrhZZN8s2FM0N5lsPTHAnSc3SXMT1tGickQALigBIQQWy~FaveggG2pVJcbIMs1zyCOoSRv6HKg-74WOEObEvx~Cj9xZekhxou5ZNh2pASHWq4J4ZDTJ5AwQDRJwlTg2aEt1HnkuyDxwDSCRpJoM6FuCjbxg3U~d1B7NjjFMgXQ0APTzCfnemf~urh7zw__" alt="" />
        </div>
        <div className="flex gap-5 flex-col flex-grow">
          <div className="text-4xl font-bold md:w-72">
            Subscribe to our
            Newsletter!
          </div>
          <p className="text-lg text-[#908F8F]">
            Be the first to get exclusive offers
            <br />
            ands the latest news
          </p>
          <input type="text" className="h-16 w-full outline-none border rounded-xl indent-5" placeholder="Enter your email address"/>
          <button className="bg-[#F01C21] text-white w-60 rounded-lg font-semibold py-4 cursor-pointer">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe