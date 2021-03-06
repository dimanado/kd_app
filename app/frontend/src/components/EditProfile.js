import React from 'react';
import { Col } from 'react-bootstrap';
import ImageForm from 'ImageForm';
import ProfileForm from 'ProfileForm';

export default function EditProfile({ profile, handleSubmit, ...props }) {
  return (
    <div>
      <Col xs={12}>
        <h2>Edit profile</h2>
      </Col>
      <Col xs={12} md={8}>
        <ProfileForm profile={profile} />
      </Col>
      <Col xs={12} md={4}>
        <ImageForm
          avatar={profile.avatar}
          handleSubmit={handleSubmit}
        />
      </Col>
    </div>
  );
}
