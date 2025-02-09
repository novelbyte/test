'use client'

export const OurProcess = () => {
    return (
      <section className="pt-8 pl-8 pb-20 bg-[radial-gradient(ellipse_100%_50%_at_center,#656e92,#EAEEFE_100%)] overflow-x-clip h-[600px]">
        <h1 className="md:text-3xl text-2xl font-bold tracking-tighter bg-gradient-to-b from-[#22242b] to-[#5e678b] text-transparent bg-clip-text mt-6">
          Nasz proces
        </h1>
        <ul className='mt-[34px] divide-y divide-grayDark divide-opacity-[0.7]'>
          <li className='group flex flex-col items-start px-[20px] py-[15px] hover:pb-[25px] transition-all duration-300'>
            <h3 className='flex items-center text-[14px] text-black opacity-70 lg:text-[16px] mr-4'>
              <span className="font-[600] mr-2">01</span>
              Odkrycie
            </h3>
            <p className='pt-1  text-[12px] opacity-0 group-hover:opacity-100 group-hover:text-black transition-opacity duration-300'>
              Analizujemy potrzeby Twojej firmy i sposób komunikacji z klientami.
            </p>
          </li>
          <li className='group flex flex-col items-start px-[20px] py-[15px] hover:pb-[25px] transition-all duration-300'>
            <h3 className='flex items-center text-[14px] text-black opacity-70 lg:text-[16px] mr-4'>
              <span className="font-[600] mr-2">02</span>
              Strategia
            </h3>
            <p className='pt-1  text-[12px] opacity-0 group-hover:opacity-100 group-hover:text-black transition-opacity duration-300'>
              Projektujemy inteligentne konwersacje, które zwiększają zaangażowanie.
            </p>
          </li>
          <li className='group flex flex-col items-start px-[20px] py-[15px] hover:pb-[25px] transition-all duration-300'>
            <h3 className='flex items-center text-[14px] text-black opacity-70 lg:text-[16px] mr-4'>
              <span className="font-[600] mr-2">03</span>
              Wdrożenie
            </h3>
            <p className='pt-1 text-[12px] opacity-0 group-hover:opacity-100 group-hover:text-black transition-opacity duration-300'>
              Tworzymy i integrujemy chatboty na różnych platformach.
            </p>
          </li>
          <li className='group flex flex-col items-start px-[20px] py-[15px] hover:pb-[25px] transition-all duration-300'>
            <h3 className='flex items-center text-[14px] text-black opacity-70 lg:text-[16px] mr-4'>
              <span className="font-[600] mr-2">04</span>
              Rozwój
            </h3>
            <p className='pt-1  text-[12px] opacity-0 group-hover:opacity-100 group-hover:text-black transition-opacity duration-300'>
              Monitorujemy wyniki i optymalizujemy interakcje, aby zwiększyć skuteczność.
            </p>
          </li>
        </ul>
      </section>
    );
  };
  
  export default OurProcess;
  