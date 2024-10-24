import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between p-2 mx-20 border-b-2'>
            <h1 className='text-2xl font-bold mt-2'>Knowledge Cafe</h1>
            <img src={profile} alt="" />

        </header>
    );
};

export default Header;