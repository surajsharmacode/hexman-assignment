




import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'
import img5 from '../../assets/images/img5.png'
import ticket1 from '../../assets/images/Ticket1.png'
import adimage from '../../assets/images/ad-img.png'



const Cards2 = () => {
  return (
//  cards container start here for top
<div>
    <div className='cards-container'>
      <div className='sports-text'>
      <h2>Sports</h2>
      </div>
       <div className='cards-flex'>
 {/* // single card start here */}
       <div className='cards'>
        <div className='auto-marg'>
        <div className='card-img'>
         <img src={img1} alt="" />
         </div>
         <div className='sportman-name'>Sacramento River Cats</div>
         <div className='sportsman-events-container'>
           <div className='sport-flex'>
           <div className='sport-head'>Total Events</div>
           <div className='sport-head'>Sport</div> 
           </div>
             <div className='sport-flex'>
             <div className='data-fields'>48 Events</div>
             <div className='data-fields'>Baseball</div>
             </div>
         </div>
        </div>
      </div>

      <div className='cards'>
        <div className='auto-marg'>
        <div className='card-img'>
         <img src={img2} alt="" />
         </div>
         <div className='sportman-name'>Las Vegas Aviators</div>
         <div className='sportsman-events-container'>
           <div className='sport-flex'>
           <div className='sport-head'>Total Events</div>
           <div className='sport-head'>Sport</div> 
           </div>
             <div className='sport-flex'>
             <div className='data-fields'>28 Events</div>
             <div className='data-fields'>Baseball</div>
             </div>
         </div>
        </div>
      </div>

      <div className='cards'>
        <div className='auto-marg'>
        <div className='card-img'>
         <img src={img4} alt="" />
         </div>
         <div className='sportman-name'>new jersey devils</div>
         <div className='sportsman-events-container'>
           <div className='sport-flex'>
           <div className='sport-head'>Total Events</div>
           <div className='sport-head'>Sport</div> 
           </div>
             <div className='sport-flex'>
             <div className='data-fields'>15 Events</div>
             <div className='data-fields'>Ice Hockey</div>
             </div>
         </div>
        </div>
      </div>

      <div className='cards'>
        <div className='auto-marg'>
        <div className='card-img'>
         <img src={img2} alt="" />
         </div>
         <div className='sportman-name'>Sacramento River Cats</div>
         <div className='sportsman-events-container'>
           <div className='sport-flex'>
           <div className='sport-head'>Total Events</div>
           <div className='sport-head'>Sport</div> 
           </div>
             <div className='sport-flex'>
             <div className='data-fields'>28 Events</div>
             <div className='data-fields'>Baseball</div>
             </div>
         </div>
        </div>
      </div>

      <div className='cards advertisement'>
        <div className='auto-marg'>
        <div className='card-img'>
         <img src={adimage} alt="" />
         <div className='ad-desc'>
            <h2>Advertisement title</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla eo dignissimos facilis voluptates beatae illum praesentium eaque, eius porro veniam inventore, fuga, adipisci numquam sint explicabo. Quod nulla eum officia provident dolorum cupiditate veniam quos.</p>
         </div>
         </div>
         
         
         </div>  
      
        
      </div>

       </div>

       <div className='flex-btn'>
        <button className='see-more-btn'>see more</button>
       </div>
     
    </div>

    <div className='container-box-2'>
        <div className='inner-container'>
            <div className='main-heading'>
                <h1>Collection Spotlight</h1>
            </div>
            <p className='para-text'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
        <div className='ticket-container'>
           <div className='ticket-detail-container'>
                <img src={ticket1} alt="" />            
                <div className='dashed-line'>
                <div className='circle1'></div>
                <hr />
                <div className='circle2'></div>
                </div>
                <div className='ticket-desc'>
                  <p>Las Vegas Aviators</p>
                  <p>OCT 15| SUN |4:30 PM</p>
                  <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
                </div>
                <div className='buy-btn'>
                  <button>Take flight Collection</button>
                </div>
           </div>

           <div className='ticket-detail-container'>
                <img src={ticket1} alt="" />            
                <div className='dashed-line'>
                <div className='circle1'></div>
                <hr />
                <div className='circle2'></div>
                </div>
                <div className='ticket-desc'>
                  <p>Las Vegas Aviators</p>
                  <p>OCT 15| SUN |4:30 PM</p>
                  <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
                </div>
                <div className='buy-btn'>
                  <button>Take flight Collection</button>
                </div>
           </div>

           <div className='ticket-detail-container'>
                <img src={ticket1} alt="" />            
                <div className='dashed-line'>
                <div className='circle1'></div>
                <hr />
                <div className='circle2'></div>
                </div>
                <div className='ticket-desc'>
                  <p>Las Vegas Aviators</p>
                  <p>OCT 15| SUN |4:30 PM</p>
                  <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
                </div>
                <div className='buy-btn'>
                  <button>Take flight Collection</button>
                </div>
           </div>
        </div>

        </div>
       
    </div>

    </div>
  )
}

export default Cards2
