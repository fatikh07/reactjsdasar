import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const Formulir = ({
  nama,
  deskripsi,
  harga,
  handleChange,
  handleSubmit,
  id,
}) => {
  return (
    <div className="mt-3">
      <Row>
        <Col>
          <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nama">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={nama}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="deskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                row="3"
                name="deskripsi"
                value={deskripsi}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                name="harga"
                value={harga}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
