console.log('listening with live-server');

document.querySelector('button').addEventListener('click', function(e)  {
    e.target.textContent = 'NOTE CREATED';
    console.log('create note clicked')
    
});

document.querySelectorAll('button')[1].addEventListener('click', function(e)  {
    e.target.textContent = 'NOTES REMOVED';
    console.log('All Notes Removed');
    
});

const ps = document.querySelectorAll('p');
    ps.forEach(function(p)  {
        console.log(p.textContent);
    });
    
  

// console.log(p[2]);
    // console.log(p);
    


