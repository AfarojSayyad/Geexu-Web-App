import Link from 'next/link'
import styled from 'styled-components'


const Nav = styled.nav`
    height: 80px;
    background: #000;
    color:#fff;
    display: flex;
    justify-content:space-between;
    align-items:center;
    
`;

const StyledLink = styled.nav`
padding : 0rem 2rem;
cursor:pointer
`;
const NavBar = () =>
{
    return(
    <Nav>
        <h1>NAvbar</h1>
        <div>
            <Link href='/' passHref>
               NXT
            </Link>
        </div>

        <div>
            <Link href='/' passHref>
                <StyledLink>Home</StyledLink>
            </Link>
        </div>

        <div>
            <Link href='/about' passHref>
                <StyledLink>About</StyledLink>
            </Link>
        </div>

        <div>
            <Link href='/contact' passHref>
                <StyledLink>Contact</StyledLink>
            </Link>
        </div>
    </Nav>
    );
};
export default NavBar;