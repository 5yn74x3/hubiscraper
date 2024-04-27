import { useDarkTheme, useMediaQuery } from './hooks';
import DocsGPT3 from './assets/cute_docsgpt3.svg';

export default function Hero({ className = '' }: { className?: string }) {
  // const isMobile = window.innerWidth <= 768;
  const { isMobile } = useMediaQuery();
  const [isDarkTheme] = useDarkTheme();
  return (
    <div
      className={`mt-14 mb-32 flex flex-col text-black-1000 dark:text-bright-gray lg:mt-6`}
    >
      <div className=" mb-2 flex items-center justify-center sm:mb-10">
        
        <img className="mb-2 h-14" src={DocsGPT3} alt="Hubiscraper0.1" /> 
        <p className="mr-2 text-4xl font-semibold">Hubiscraper0.1</p>
      </div>
      {isMobile ? (
      
      ) : (
        <>
          <p className="mb-3 text-center leading-6">
          </p>
          <p className="mb-3 text-center leading-6">
          
          </p>
          <p className="mb-3 text-center leading-6">
          
          </p>
        </>
      )}
      <div
        className={`mt-0 flex flex-wrap items-center justify-center gap-2 sm:mt-1 sm:gap-4 md:gap-4 lg:gap-0`}
      >
        {/* first */}
        <div className="h-auto rounded-[50px] bg-gradient-to-l from-[#6EE7B7]/70  via-[#3B82F6] to-[#9333EA]/50 p-1 dark:from-[#D16FF8] dark:via-[#48E6E0] dark:to-[#C85EF6] lg:h-60  lg:rounded-tr-none lg:rounded-br-none">
          <div
            className={`h-full rounded-[45px] bg-white dark:bg-dark-charcoal p-${
              isMobile ? '3.5' : '6 py-8'
            }  lg:rounded-tr-none lg:rounded-br-none`}
          >
            {/* Add Mobile check here */}
            {isMobile ? (
              <div className="flex justify-center">
                <img
                  src={
                    isDarkTheme ? '/message-text-dark.svg' : '/message-text.svg'
                  }
                  alt="lock"
                  className="h-[24px] w-[24px] "
                />
                <h2 className="mb-0 pl-1 text-lg font-bold">
                </h2>
              </div>
            ) : (
              <>
                <img
                  src={
                    isDarkTheme ? '/message-text-dark.svg' : '/message-text.svg'
                  }
                  alt="lock"
                  className="h-[24px] w-[24px]"
                />
                <h2 className="mt-2 mb-3 text-lg font-bold">
                </h2>
              </>
            )}
            <p
              className={
                isMobile
                  ? `w-[250px] text-center text-xs text-gray-500 dark:text-bright-gray`
                  : `w-[250px] text-xs text-gray-500 dark:text-bright-gray`
              }
            >
            
            </p>
          </div>
        </div>
        {/* second */}
        <div className="h-auto rounded-[50px] bg-gradient-to-r from-[#6EE7B7]/70 via-[#3B82F6] to-[#9333EA]/50 p-1 dark:from-[#D16FF8] dark:via-[#48E6E0] dark:to-[#C85EF6] lg:h-60  lg:rounded-none  lg:py-1 lg:px-0">
          <div
            className={`h-full rounded-[45px] bg-white dark:bg-dark-charcoal p-${
              isMobile ? '3.5' : '6 py-6'
            }  lg:rounded-none`}
          >
            {/* Add Mobile check here */}
            {isMobile ? (
              <div className="flex justify-center ">
                <img
                  src={isDarkTheme ? '/lock-dark.svg' : '/lock.svg'}
                  alt="lock"
                  className="h-[24px] w-[24px]"
                />
                <h2 className="mb-0 pl-1 text-lg font-bold">
                </h2>
              </div>
            ) : (
              <>
                <img
                  src={isDarkTheme ? '/lock-dark.svg' : '/lock.svg'}
                  alt="lock"
                  className="h-[24px] w-[24px]"
                />
                <h2 className="mt-2 mb-3 text-lg font-bold">
                </h2>
              </>
            )}
            <p
              className={
                isMobile
                  ? `w-[250px] text-center text-xs text-gray-500 dark:text-bright-gray`
                  : `w-[250px] text-xs text-gray-500 dark:text-bright-gray`
              }
            >
  
            </p>
          </div>
        </div>
        {/* third */}
        <div className="h-auto rounded-[50px] bg-gradient-to-l from-[#6EE7B7]/70  via-[#3B82F6] to-[#9333EA]/50 p-1 dark:from-[#D16FF8] dark:via-[#48E6E0] dark:to-[#C85EF6] lg:h-60 lg:rounded-tl-none lg:rounded-bl-none ">
          <div
            className={`firefox h-full rounded-[45px] bg-white dark:bg-dark-charcoal p-${
              isMobile ? '3.5' : '6 px-6 '
            } lg:rounded-tl-none lg:rounded-bl-none`}
          >
            {/* Add Mobile check here */}
            {isMobile ? (
              <div className="flex justify-center">
                <img
                  src={
                    isDarkTheme
                      ? 'message-programming-dark.svg'
                      : '/message-programming.svg'
                  }
                  alt="lock"
                  className="h-[24px] w-[24px]"
                />
                <h2 className="mb-0 pl-1 text-lg font-bold">
                </h2>
              </div>
            ) : (
              <>
                <img
                  src={
                    isDarkTheme
                      ? '/message-programming-dark.svg'
                      : '/message-programming.svg'
                  }
                  alt="lock"
                  className="h-[24px] w-[24px]"
                />
                <h2 className="mt-2 mb-3 text-lg font-bold">
                </h2>
              </>
            )}
            <p
              className={
                isMobile
                  ? `w-[250px] text-center text-xs text-gray-500 dark:text-bright-gray`
                  : `w-[250px] text-xs text-gray-500 dark:text-bright-gray`
              }
            >
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
