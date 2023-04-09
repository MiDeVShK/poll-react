import Button from '../components/buttons/button'
import Poll from '../components/poll'
import Title from '../components/title-category/title'
import { useLocation } from 'react-router-dom';

const Popular = (props) => {
  const location = useLocation();

  let content;
  if (location.pathname === '/') {
    content = <Title text='Most Popular'/>;
  } else if (location.pathname === '/category') {
    content = <Title titleText='Une category'/>;
  }
 

    return (
      
      <section className='mb-4 relative z-5'>
        <template className="flex justify-between mx-10">
            {content}
            <Button text='Create Poll' />
        </template>

        
        <template className="flex justify-center gap-6 flex-wrap mt-4">
            <Poll
            category='Love'
            author='Coucou'
            question='Love me?'
            answerA='tender'
            answerB='hard'
            answerAPourcent= {22}
            answerBPourcent= {78}
            />
             <Poll
             category='Love'
             author='Mike'
             question='Est-il adorable?'
             answerA='Ba oui'
             answerB='Non mais normal je suis Romain'
             answerAPourcent= {99}
             answerBPourcent= {1}
             />
             <Poll
             category='Love'
            author='Coucou'
            question='Love me?'
            answerA='tender'
            answerB='hard'
            answerAPourcent= {22}
            answerBPourcent= {78}
            />
            <Poll
            category='Love'
            author='Coucou'
            question='Love me?'
            answerA='tender'
            answerB='hard'
            answerAPourcent= {22}
            answerBPourcent= {78}
            />
        
        </template>
  
       </section>
  
    )
  }
  
  export default Popular