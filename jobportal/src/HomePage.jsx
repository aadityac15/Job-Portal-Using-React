import React from 'react';
import './homepage.css';
export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            jobs: {
                data: [
                    { title: 'Graphic Designer', description: 'Need Someone to Create a Logo' },
                    { title: 'Programmer', description: 'Need Someone to create my Startup Site' },
                    { title: 'Marketer', description: 'Need Someone to popularize my Startup Site' },
                    { title: 'Security Engineer', description: 'Need Someone to create my Startup Site' },
                    { title: 'Network Engineer', description: 'Network Maintenance for the website.' }
                ]

            }
        }
    }


    showJobs = () => {

        const newJobTitle = this.props.jobTitle;
        const newJobDescription = this.props.jobDescription;
        const newJobObj = { title: newJobTitle, description: newJobDescription };
        const jobObj = this.state.data;
        if (newJobTitle !== null || newJobDescription !== null)
            {
                this.setState((prevState) => {
                   data : prevState.jobs.data.push(newJobObj)  
                })  
            }

        this.setState((prevState) => ({
            flag: !(prevState.flag),            
        }));
        console.log(this.state.jobs.data);

    }

    

    render() {

        const jobList = this.state.jobs.data.map((job, i) => {
            console.log(job)
            return (
                <li>
                  <div className='home-div-list'>
                      <h4>{job.title}</h4>
                      <p>{job.description}</p>
                  </div>
               </li>
            )
        })

        return (
            <div className="home-div-main container">
                {/*<h3>{this.props.jobTitle}</h3>
                <h3>{this.props.jobDescription}</h3>*/}
                <div className='home-div-sub container'>
                    <div className='jumbotron' id="jumbotron-changes">
                        <h1>Job Portal</h1>
                    </div>
                    {!this.state.flag ? 
                    
                    <h5><button className='btn-link' onClick={this.showJobs}>Current Jobs</button></h5>
                    :
                    <h5><button className='btn-link' onClick={this.showJobs}>Collapse</button></h5>}
                    </div>
            
                <div>
                    {this.state.flag ?
                        <ol className='container'>
                            {jobList}
                        </ol>
                        : 
                        null}
                </div>
            </div>
        )
    }
}