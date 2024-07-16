import React, { Component } from 'react';

class Gmap extends Component {
    render() {
        return (
            <div className='align-center'>
                <h2 className='text-center'>MY LOCATION</h2>
                <iframe title='gmap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7476115971554!2d106.5878564745169!3d10.753924559609406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c5304dda63d%3A0x3fb90a1e48c4bbcf!2zROG7i2NoIHbhu6UgVGnhu4djIGPGsOG7m2kgUGjGsMahbmcgTGluaA!5e0!3m2!1svi!2s!4v1719289826334!5m2!1svi!2s" width="800" height="600" style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        );
    }
}
export default Gmap;