import React from 'react'


const Home = () => {
  return (
    <section className='home'>
      <div className='content'>
        <div className = 'name'>
          MY NAME IS <span>ABHAY</span>
        </div>
        <div className='des'>
          Pariatur voluptate exercitation incididunt anim labore aliquip voluptate
           commodo do incididunt culpa Lorem. Labore ullamco et cupidatat consectetur
            exercitation officia occaecat do. Labore culpa culpa reprehenderit est quis 
            amet sit quis proident voluptate fugiat id ea. Non sit adipisicing id magna
           velit esse nostrud enim aliquip et elit cillum elit incididunt. Esse dolore nisi
            ea nostrud officia officia. Ex nisi do est commodo reprehenderit.
        </div>
        <a href='/democv.pdf' target="_blank" rel='noopener noreferrer'>Download My CV</a>
      </div>
      <div className='avatar'>
        <div className="card">
          <img src="/avatar.jpg" alt="" />
          <div className="info">
            <div>Developer</div>
            <div>Indian</div>
            <div>03/12</div>
            <div>Male</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;