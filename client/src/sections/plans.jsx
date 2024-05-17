import { Container } from "../components/container";
import { FadeIn } from "../components/fade-in";
import { Button } from "../components/button";
export const Plans = () => {
  return (
    <>
    <Container className="relative z-10 max-w-[692px] space-y-12 py-36 text-2xl font-bold text-white md:text-4xl">
      <FadeIn>
        <p>New Movies every week — prebook at low cost when subscribed.</p>
      </FadeIn>
      <FadeIn>
        <p>
          Personal Streaming is coming soon.
        </p>
      </FadeIn>
      <FadeIn>
        <p>Only theatres with Dolby Surround Systems is with us.</p>
      </FadeIn>
      <FadeIn>
        <p>Share a single subscription with up to five people.</p>
      </FadeIn>
    </Container>
     <Container className="relative z-10  space-y-12 py-36 text-2xl font-bold text-white md:text-4xl">
     <FadeIn>
       <p>Popular plans</p>
     </FadeIn>
     <FadeIn>
      <div className="grid grid-rows-3 md:grid-rows-3 lg:grid-rows-1 grid-flow-col gap-10 ">
                  <div className="self-center justify-self-center hover:scale-105 duration-500">
                     <h2>
                        Free
                     </h2>
                     
                     <p className="text-[#a1a1a6] text-xl p-4">
                        Try out limited services for free.
                     </p>
                     <p className="text-[#a1a1a6] text-xl p-4">
                        Total of 7-days trial period for free.
                     </p>
                     <Button size='medium'> Try Out ( FREE ) </Button> 
                  </div>

                  <div className="self-center justify-self-center hover:scale-105 duration-500">
                     <h2>
                        Value  
                     </h2>
                     
                     <p className="text-[#a1a1a6] text-xl p-4">
                        Best value pack for the limited services .
                     </p>
                     <p className="text-[#a1a1a6] text-xl p-4">
                     For one low monthly price, enjoy more for&nbsp;less. 
                     </p>
                     <Button size='medium'>Rs.350/- per month</Button> 
                  </div>

                  <div className="self-center justify-self-center hover:scale-105 duration-500">
                     <h2>
                        Pro  
                     </h2>
                     
                     <p className="text-[#a1a1a6] text-xl p-4">
                        Every services for one low monthly price. 
                     </p>
                     <p className="text-[#a1a1a6] text-xl p-4">
                        The real enjoy more for&nbsp;less.
                     </p>
                     <Button size='medium'>Rs.990/- per month </Button> 
                  </div>
      </div>
   
     </FadeIn>
   </Container>
    </>
    
  );
};
