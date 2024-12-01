import React, { useState } from "react";
import { Breadcrumb, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import "./Navbar.css";


export default function Navbar({ data, setState }) {
    const [searchVal, setSearchVal] = useState('');
    const newTreeSearch = (data, value = "") => {
        const updateData = data.filter(function Search(el) {
            if (el.widget_name?.trimStart()?.toLocaleUpperCase().includes(value.toLocaleUpperCase())) return true;
            if (Array.isArray(el?.children)) {
                return (el.children = el.children.filter(Search)).length;
            }
        })
        return updateData;
    }

    const searchFilter = (e) => {
        const value = e.target.value;
        setSearchVal(value);
        setState(newTreeSearch(data, value))
    }

    return (
        <div key={data.id} className="navbarContainer">
            <ul className="navLinksList">
                <li>
                    <Breadcrumb
                        separator=">"
                        items={[
                            {
                                title: 'Home',
                                href: ""

                            },
                            {
                                title: 'Dashboard V2',
                                href: '',
                            }
                        ]}
                    />
                </li>
            </ul>
            <ul className="navLinksList" >
                <li>
                    <Input
                        size="small"
                        style={{ width: "300px" }}
                        prefix={<SearchOutlined />}
                        onChange={searchFilter}
                        value={searchVal}
                        type="search"
                        disableUnderline
                        className="input"
                        placeholder="Search..." />
                </li>
                {iconLinks.map((item, index) => {
                    return (
                        <li key={index} >
                            <i
                                className="navIcons"
                                disableRipple
                            >
                                <svg
                                    viewBox={item.viewBox}
                                    width={item.width}
                                    height={item.height}
                                    fill="currentColor"
                                >
                                    <path d={item.path_d}></path>
                                </svg>
                            </i>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

Navbar.propTypes = {
    data: PropTypes.array,
    setState: PropTypes.func,
}


const iconLinks = [
    {
        title: "newplayground",
        viewBox: "0 0 24 24",
        width: "22px",
        height: "22px",
        path_d:
            "M21 5H3v14h9v2H1V3h22v7h-2V5zm-3 11v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3zM6 8l7 4.001L6 16v-2.303l2.969-1.696L6 10.303V8z"
    },

    {
        title: "notifications",
        viewBox: "0 0 24 24",
        width: "22px",
        height: "22px",
        path_d:
            "M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-6 6c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2z"
    },

    {
        title: "profile",
        viewBox: "0 0 24 24",
        width: "22px",
        height: "22px",
        path_d:
            "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"
    }
];