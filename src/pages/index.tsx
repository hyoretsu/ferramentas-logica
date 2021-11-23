import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

import api from '@api';

import appPackageJson from '../../package.json';
import { siteName as title } from './_document';

const Homepage: React.FC = () => {
 const { description } = appPackageJson;

 useEffect(() => {
  api.post('/', 'p ^ q').then(res => console.log(res.data));
 }, []);

 return <NextSeo description={description} openGraph={{ description, title }} />;
};

export default Homepage;
