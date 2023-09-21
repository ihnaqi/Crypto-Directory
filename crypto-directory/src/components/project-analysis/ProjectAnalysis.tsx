import ThreeTiles from '../new-tile/three-tile/ThreeTiles'
import './project_analysis.css'
const ProjectAnalysis = () => {

   const list = [
      {
         title: 'Project Analysis',
         subtitle: 'XDEFI Wallet',
         date: 'Jul 26, 2023'
      },
      {
         title: 'Project Analysis',
         subtitle: 'Fusionist',
         date: 'Jul 31, 2023'
      },
      {
         title: 'Project Analysis',
         subtitle: 'Beware Labs',
         date: 'Jul 26, 2023'
      }
   ]

   return(
      <section>
         <section className="project-analysis-wrapper">
            <div className="project-analysis-title-container">
               <h3> Project Analysis </h3>
               <span>More Project Analysis ⌲ </span>
            </div>
            <div className="project-analysis-content-container">
               <div className='project-analysis-content-image-wrapper'>
               </div>
               <div className='project-analysis-content-text-wrapper'>
                  <div className='text-wrapper'>
                     <h4>Project Analysis</h4>
                     <h2> Walken </h2>
                     <p className='text'>The crypto space has witnessed a surge in move-to-earn projects focused on the heatlh and fitness sector. The globally fitness market app raches $5.1 billions in 2021, projected exponentaial gr...</p>
                  </div>
                  <p className='date'>July 31, 2023</p>
               </div>
            </div>
         </section>
         <ThreeTiles list={list} />
      </section>
   )
}

export default ProjectAnalysis