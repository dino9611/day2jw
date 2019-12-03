import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from 'reactstrap';
import {Link} from 'react-router-dom'
import {connect,useSelector} from 'react-redux'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const Bayarparkir=useSelector(({BayarParkir})=>BayarParkir)
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <Nav>
          <NavItem className='mr-2'>{props.Hitungkata.jumlahkata} word</NavItem>
          <NavItem><Link to='/hitungkata'>Hitungkata</Link></NavItem>
          <NavItem className='ml-2'>Rp.{Bayarparkir},00</NavItem>
        </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              {props.Angka}
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
const MapStateToProps=({bebas,hitungkata,BayarParkir})=>{
    return{
        Angka:bebas,
        Hitungkata:hitungkata,
        BayarParkir:BayarParkir
    }
  }
export default connect(MapStateToProps)(Header);