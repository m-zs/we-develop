import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

import icon from 'assets/images/icon.svg'

interface SeoProps {
  title: string
  description: string
}

const Seo: FC<SeoProps> = ({ title, description }) => (
  <Helmet>
    <html lang="en" />
    <title>{title} - WE DEVELOP</title>
    <meta name="description" content={description} />
    <meta name="referrer" content="origin" />
    <link rel="icon" type="image/svg" href={icon} />
  </Helmet>
)

export default Seo
