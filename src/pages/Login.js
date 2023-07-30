// 로그인 창
import React from "react";
import GoogleLogin from '../components/Login/GoogleLogin';
import KaKaoLogin from '../components/Login/KaKaoLogin';


const Login = () => {
    return (
        <main className="w-80 h-[800px] bg-[#ffffff] relative top-0 left-0 z-0 border-2 border-[#E6E6E6]">
            <div className="flex flex-col items-center absolute top-[60px] left-2.5">
                <h1 className="text-[30px] font-bold mb-[30px]">로그인</h1>
                <div className="w-[300px] h-[282.878px] mb-[30px]"
                    style={{
                        backgroundImage: `url('/images/LoginImg.png')`, // 배경 이미지
                        backgroundPosition: "center", // 이미지 위치
                        backgroundSize: "cover", // 이미지 꽉차게
                        backgroundRepeat: 'no-repeat', // 이미지 반복 지정
                    }}
                />
            </div>
            <button className="w-[300px] h-[80px] bg-[#FCEC4F] absolute top-[490px] left-2.5  border-2 border-[#E6E6E6] flex items-center">
                <img className="w-[40px] h-[40px] mx-[20px]" src="/images/Kakao.png" alt=" 카카오 로그인" />
                <KaKaoLogin />
            </button>
            <button className="w-[300px] h-[80px] bg-[#FFFFFF] absolute top-[590px] left-2.5 border-2 border-[#E6E6E6] flex items-center">
                <img className="w-[40px] h-[40px] mx-[20px]" src="/images/google.png" alt=" 구글 로그인 " />
                <GoogleLogin />
            </button>
            {/* 로그인 버튼 */}
        </main>
    )
};

export default Login;