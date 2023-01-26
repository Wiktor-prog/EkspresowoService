import React from "react";
import { Oval } from  'react-loader-spinner'

export default function PreLoading () {
  return (
    <div className="Preloader">
      <Oval
      height={80}
      width={80}
      color="#a78880"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#a78864"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
    </div>
  )
}