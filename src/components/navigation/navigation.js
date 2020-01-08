import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const Navigation = (
  {
    links,
    tabs,
    pills,
    vertical,
    justified
  }
) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Nav tabs={tabs} pills={pills} vertical={vertical} justified={justified}>
    {
      links.map(primaryItem => (
        <React.Fragment key={primaryItem.id}>
          <NavItem className="navItem">
          { !primaryItem.secondaryNav &&
            <NavLink
              href={primaryItem.href}
              name={primaryItem.name}
              id={primaryItem.id}>
              {primaryItem.name}
            </NavLink>
          }
          </NavItem>
          { primaryItem.secondaryNav &&
            <Dropdown nav isOpen={dropdownOpen} id={primaryItem.id + '-secondary'} toggle={toggle}>
              <DropdownToggle nav caret>
                {primaryItem.name}
              </DropdownToggle>
              <DropdownMenu>
              {
                primaryItem.secondaryNavItem.map(secondaryItem => (
                  <DropdownItem key={secondaryItem.id} id={secondaryItem.id}>{secondaryItem.name}</DropdownItem>
                  )
                )
              }
              </DropdownMenu>
            </Dropdown>
          }
        </React.Fragment>
      ))
    }        
    </Nav>
  )
};

export default Navigation;