import React from 'react'
import {Link } from "gatsby"
import './datasource.css'
import { Doughnut } from 'react-chartjs-2';
import {Row, Col} from 'react-bootstrap'



export default function(props) {

    const source = props.source

    return <div className="data-source">
        <Link to={source.page}>
            <Row>
                <Col xs={12} md={6} lg={8}><h2>{source.title}</h2>
                    <div className="description">{source.summary}</div>
                </Col>
                <Col xs={12} md={6} lg={4}>{source.graph}</Col>
            </Row>
        </Link>
    </div>
}
