import { LiaSignInAltSolid } from "react-icons/lia";

const Works = () => {
  return (
    <div className="px-5 md:px-28 py-8 flex flex-col bg-[#f8f8f8] gap-10">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-4xl font-bold">How It Works?</h1>
        <p className="border-2 border-red-600 w-36"></p>
      </div>
      <div className="flex justify-between gap-y-10 flex-wrap">
        <div className="border flex flex-col gap-10 p-10 rounded-xl items-center bg-white lg:w-[32%]">
          <div className="h-16 w-16 flex text-4xl rounded-xl items-center justify-center bg-[#fdddde]">
            <LiaSignInAltSolid />
          </div>
          <p className="text-xl font-bold">Signup</p>
          <p className="text-lg text-center">
            If you are going to use a passage of Lorem Ipsum, you need to be sure there
          </p>
        </div>

        <div className="border flex flex-col gap-10 p-10 rounded-xl items-center bg-white lg:w-[32%]">
          <div className="h-16 w-16 flex text-4xl rounded-xl items-center justify-center bg-[#fdddde]">
            <LiaSignInAltSolid />
          </div>
          <p className="text-xl font-bold">Signup</p>
          <p className="text-lg text-center">
            If you are going to use a passage of Lorem Ipsum, you need to be sure there
          </p>
        </div>

        <div className="border flex flex-col gap-10 p-10 rounded-xl items-center bg-white lg:w-[32%]">
          <div className="h-16 w-16 flex text-4xl rounded-xl items-center justify-center bg-[#fdddde]">
            <LiaSignInAltSolid />
          </div>
          <p className="text-xl font-bold">Signup</p>
          <p className="text-lg text-center">
            If you are going to use a passage of Lorem Ipsum, you need to be sure there
          </p>
        </div>
      </div>
    </div>
  )
}

export default Works