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
        
     
      </div>
    </div>
  );
}
