import React,{useState} from 'react';
import logo from '../../assets/img/logo.jpg';
import { 
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Col,
    Row,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


const Header = (props) => {
    
    /*constructor(){
        super();
        this.state={
            collapsed:true
        }
        this.toggleNavbar=this.toggleNavbar.bind(this);
    }

    toggleNavbar(){
        const {collapsed}=this.state;
        this.setState({collapsed:!collapsed});
    }*/

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);


        /*const collapsed=this.state.collapsed;
        const toggleNavbar = this.toggleNavbar;*/

    return(
        /*<div className="header">
            
            <Navbar expand="md" color="faded" light>
                <Col lg="6" xl="5">
                    <Row>
                        <Col lg="8">
                            <NavbarBrand href="/">
                                <img src={logo}></img>
                            </NavbarBrand>
                        </Col>
                    </Row>
                </Col>
                <Col lg="1" xl="2">
                </Col>
                <Col lg="5" xl="5">
                    <Collapse  navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">
                                <Button>Destination</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/MyCountry/">
                                <Button>My Country</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/Language/" className="language">
                            <Button>Language</Button>
                        </NavLink>
                        </NavItem>
                        
                    </Nav>
                    </Collapse>
                </Col>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>*/
        <div className="header">
            <Navbar color="faded" light>
                <Col xs="6" sm="4" md="3" lg="5" xl="5" >
                    <Row>
                        <Col lg="8">
                            <NavbarBrand href="/">
                                <img src={logo}></img>
                            </NavbarBrand>
                        </Col>
                    </Row>
                </Col>
                <Col lg="1" xl="2" sm="1" md="1" className="nav_space">
                </Col>
                <Col lg="6" xl="5"  sm="7" md="8" className="nav_btns">
                    <Nav>
                        <NavItem>
                            <NavLink href="/components/">
                                <Button>Destination</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/MyCountry/">
                                <Button>My Country</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/Language/" className="language">
                            <Button>Language</Button>
                        </NavLink>
                        </NavItem>
                    </Nav>
                </Col>
                <NavbarToggler onClick={toggleNavbar} className="mr-2 nav_toggle_btn" />
                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="/components/">Destination</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/MyCountry/">My Country</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/MyCountry/">Language</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;