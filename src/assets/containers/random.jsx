import Button from '../components/buttons/button'
import Poll from '../components/poll'
import Title from '../components/title-category/title'

const Random = () => {
    return (
      
      <section className='mb-4'>
        <template className="flex justify-between mx-10">
            <Title text='Random'/>
            <Button text='Create Poll' />
        </template>

        
        <template className="flex justify-center gap-6 flex-wrap mt-4 mb-4">
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
  
  export default Random