import { useState, useEffect } from "react";
import "./ImageGallery.css"
import CardImage from "../CardImage";
import { Form, Row, Col, Spinner } from 'react-bootstrap'

function ImageGallery() {

    const [res, setRes] = useState<any[]>([]);
    const [section, setSection] = useState('hot'); // Initial filter state
    const [sort, setSort] = useState('viral'); // Initial filter state
    const [window, setWindow] = useState('day'); // Initial filter state
    const [showViral, setShowViral] = useState('true'); // Initial filter state
    const [isLoading, setIsLoading] = useState(true); // Initial filter state

    const apiImgur = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/viral/0?showViral=${showViral}`
    const apiKey = '7d924b1673a19ea'

    const fetchRequest = async () => {
        setIsLoading(true)
        const data = await fetch(apiImgur, {
            "headers": {
                'Authorization': 'Client-ID ' + apiKey,
                'Accept': 'application/json'
              }
        });
        const dataJ = await data.json();
        const result = dataJ.data;
        console.log(result, 'results');
        setRes(result);
        setIsLoading(false)
      };
      useEffect(() => {
        fetchRequest();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [section, sort, window, showViral]);

    return (
        <>
            <div className="container-fluid p-5 bg-dark">
                <h1 className="text-center mb-4 text-white">
                    🚀 Image Gallery with React, Redux and TypeScript 💨
                </h1>
                <Form className="pb-3">
                    <Row>
                        <Form.Group as={Col} xs="6" lg="3">
                            <Form.Label className="text-white">Section</Form.Label>
                            <Form.Select onChange={e => setSection(e.target.value)} value={section}>
                                <option value="hot">Hot</option>
                                <option value="top">Top</option>
                                <option value="user">User</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} xs="6" lg="3">
                            <Form.Label className="text-white">Sort</Form.Label>
                            <Form.Select onChange={e => setSort(e.target.value)} value={sort}>
                                <option value="viral">Viral</option>
                                <option value="top">Top</option>
                                <option value="time">Time</option>
                                <option value="rising">Rising</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} xs="6" lg="3">
                            <Form.Label className="text-white">Window</Form.Label>
                            <Form.Select onChange={e => setWindow(e.target.value)} value={window}>
                                <option value="day">Day</option>
                                <option value="week">Week</option>
                                <option value="month">Month</option>
                                <option value="year">Year</option>
                                <option value="all">All</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} xs="6" lg="3">
                            <Form.Label className="text-white">Show Viral</Form.Label>
                            <Form.Select onChange={e => setShowViral(e.target.value)} value={showViral}>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                </Form>
            </div>
            {isLoading ?
                <Spinner animation="border" className="d-flex m-auto mt-3" />
            :
                <div className="container flexbox container-images">
                    {res.map((item, index) => (
                        <CardImage image={item} key={index} />
                    ))}
                </div>
            }
        </>
    );
}

export default ImageGallery;
