import React from 'react';
import renderer from 'react-test-renderer';
import UploadList, { LinkList, ProfileImage } from './UploadList';import Socket from './lib/Socket';

test('List displays uploads in their specific formats', () => {
    const files = [
        {
            name: 'file-img',
            url: 'http://localhost:3001/',
            uid: '10001010100110',
            type: 'image',
        },
        {
            name: 'file-audio',
            url: 'http://localhost:3001/',
            uid: '00011010100110',
            type: 'audio',
        }
    ];

    const component = renderer.create(
        <UploadList uploads={files} />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('List displays uploads with Delete All button', () => {
    const files = [
        {
            name: 'file-img',
            url: 'http://localhost:3001/',
            uid: '10001010100110',
            type: 'image',
        },
        {
            name: 'file-audio',
            url: 'http://localhost:3001/',
            uid: '00011010100110',
            type: 'audio',
        }
    ];

    const component = renderer.create(
        <UploadList uploads={files} delete={jest.fn()} />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('List displays upload without Delete All button', () => {
    const files = [
        {
            name: 'file-img',
            url: 'http://localhost:3001/',
            uid: '10001010100110',
            type: 'image',
        }
    ];

    const component = renderer.create(
        <UploadList uploads={files} delete={jest.fn()} />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('List displays the file links', () => {
    const files = [
        {
            name: 'file-img',
            url: 'http://localhost:3001/',
            uid: '10001010100110',
            type: 'image',
        },
        {
            name: 'file-audio',
            url: 'http://localhost:3001/',
            uid: '00011010100110',
            type: 'audio',
        }
    ];

    const component = renderer.create(
        <LinkList uploads={files} delete={jest.fn()} />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('List displays the file link without Delete All button', () => {
    const files = [
        {
            name: 'file-img',
            url: 'http://localhost:3001/',
            uid: '10001010100110',
            type: 'image',
        }
    ];

    const component = renderer.create(
        <LinkList uploads={files} delete={jest.fn()} />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Profile image displays first file', () => {
    const files = [
        {
            name: 'file-img',
            url: 'http://localhost:3001/',
            uid: '10001010100110',
            type: 'image',
        },
        {
            name: 'file-2',
            url: 'http://localhost:3001/',
            uid: '00011010100110',
            type: 'image',
        }
    ];

    const component = renderer.create(
        <ProfileImage uploads={files} delete={jest.fn()} />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Profile image is set to default empty tag', () => {
    const files = [];

    const component = renderer.create(
        <ProfileImage uploads={files} delete={jest.fn()} />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Profile image does not display delete button', () => {
    const files = [
        {
            name: 'file-2',
            url: 'http://localhost:3001/',
            uid: '00011010100110',
            type: 'image',
        }
    ];

    const component = renderer.create(
        <ProfileImage uploads={files} />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});