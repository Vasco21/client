import React from 'react';
import './blog.css';
import Staff from '../../components/Staff/Staff';

import optimize from '../../assets/optimize.jpg';
import develop from '../../assets/develop.jpg';
import design from '../../assets/design.jpg';
import understand from '../../assets/uder.jpg';
import WeThinkCode from '../../assets/WeThinkCode.jpg';

export default function blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">We bring your organisation, <br/> in line with best practices through:</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Staff imgUrl={WeThinkCode} name="Great Things Come With Create Power"/>
      </div>
      <div className="gpt3__blog-container_groupB">
      <Staff imgUrl={develop}  name="Develop" text="We use APIs, cloud-native software, modern technology platforms and reusable code to develop functionality in a way that ensures fastest time to market.
        We focus on quality assurance throughout, making use of automated testing capabilities."/>
      <Staff imgUrl={optimize}  name="Optimize" text="We focus on value and every recommendation has a clear business-use case; the advice we give delivers return in value at every increment in the journey.
      We introduce optimisation by looking at how to achieve your desired end-state through short, medium and long-term recommendations.
      We work to optimise your DevOps by understanding current dev and ops teams, processes and tooling and recommending changes that will enable continuous delivery and quick time to value."/>
      <Staff imgUrl={design}  name="Design" text="We design with the end in mind, keeping the user in focus throughout.
      We apply human-centred design thinking and practices to solve problems not only for our clients, but for their customers too.
      We test the entire user experience with the clickable pro-types before moving to the app development phase."/>
      <Staff imgUrl={understand}  name="Understand" text="We get to know your business inside and out, and we do the same for your people.
      We perform a technical review on your ICT environment, from top to bottom.
      Once we have an understanding of what your business needs to achieve and how your people want to do it, we then move onto the next phase."/>
      </div>
    </div>
  </div>
  )
}
