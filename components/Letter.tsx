import React from 'react';

const Letter: React.FC = () => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-2xl max-w-2xl mx-auto ring-1 ring-rose-200" style={{ animation: 'fade-in 1s ease-out forwards', opacity: 0 }}>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
      <h2 className="font-dancing-script text-4xl md:text-5xl text-rose-500 mb-6 text-center">Gửi người phụ nữ con yêu thương nhất!</h2>
      
      <div className="flex justify-center my-6">
        <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center p-4 bg-rose-100 rounded-full shadow-lg border-4 border-white">
            <svg className="w-full h-full text-rose-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
            </svg>
        </div>
      </div>

      <p className="text-gray-700 text-lg leading-relaxed text-justify indent-8">
        Mẹ à,
      </p>
      <p className="text-gray-700 text-lg leading-relaxed text-justify indent-8 my-4">
        Vậy là một năm nữa lại trôi qua, con lại có thêm một cơ hội để nói lời yêu thương tới mẹ. Con biết, những lời nói dù có hoa mỹ đến đâu cũng không thể nào diễn tả hết được sự hy sinh và tình yêu thương vô bờ bến mà mẹ đã dành cho con.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed text-justify indent-8 my-4">
        Từ những ngày con còn bé thơ, trong vòng tay âu yếm của mẹ, đến khi con trưởng thành và bước đi trên con đường riêng, mẹ vẫn luôn là ngọn hải đăng soi sáng, là hậu phương vững chắc nhất cho con. Mẹ đã dạy con những bài học đầu đời, dạy con biết yêu thương, biết sẻ chia và dạy con cách trở thành một người tốt.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed text-justify indent-8 my-4">
        Con xin lỗi vì đôi lúc đã làm mẹ phiền lòng, vì những lần bướng bỉnh, vô tâm. Nhưng mẹ ơi, trong trái tim con, mẹ luôn là người quan trọng nhất, là người phụ nữ tuyệt vời nhất.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed text-justify indent-8 my-4">
        Nhân ngày đặc biệt này, con không có món quà nào lớn lao, chỉ có tấm lòng thành kính và lời chúc từ tận đáy lòng. Con chúc mẹ luôn mạnh khỏe, vui vẻ, bình an và mãi là người phụ nữ xinh đẹp, hạnh phúc nhất thế gian.
      </p>
      <p className="text-gray-800 text-xl font-semibold mt-8 text-right font-dancing-script">
        Con yêu mẹ rất nhiều!
        <br />
        <span className="text-lg">Con của mẹ.</span>
      </p>
    </div>
  );
};

export default Letter;