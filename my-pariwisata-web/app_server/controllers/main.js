const index = (req, res) => {
 	res.render('index', { title: 'ini halaman utama' });
}; 

const profile = (req, res) => {
    res.render('profile', { title: 'Profil Pengguna' });
}

const kontak = (req, res) => {
    res.render('kontak', { title: 'kontak Pengguna' });
}

const about = (req, res) => {
    res.render('about', { title: 'about' });
}

module.exports = {index ,profile, kontak, about};