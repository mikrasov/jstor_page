import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

const Metadata = (props) => (
  <StaticQuery
      query={graphql`
      query {
        site {
          siteMetadata {
            title
            twitterUsername
            siteUrl
          }
        }
      }
    `}
      render={function(data){
        const meta = data.site.siteMetadata;
        const title =  props.pageTitle? (props.pageTitle+" – "+meta.title): meta.title

      return (
        <Helmet
          title={ title}
        >
          <meta name="keywords"           content={props.pageKeywords || props.siteKeywords} />
          <meta name="description"        content={props.description} />
          <meta name="twitter:card"       content={props.pageType} />
          <meta name="twitter:site"       content={meta.siteUrl} />
          <meta name="twitter:creator"    content={"@"+meta.twitterUsername} />
          <meta property="twitter:title"  content={title} />
          <meta property="og:site_name"   content={props.siteName} />
          <meta property="og:url"         content={meta.siteUrl+props.pageUrl} />
          <meta property="og:title"       content={title} />
          <meta property="og:description" content={props.description} />
          <meta property="og:image"       content={meta.siteUrl+props.featuredImage} />
          <meta property="og:image:secure_url" content={meta.siteUrl+props.featuredImage} />

          <html lang="en" />
        </Helmet>
      )}}
    />

  )


Metadata.defaultProps = {
  description: '',
  siteKeywords:'',
  pageTitle: undefined,
  pageUrl: "",
  pageType: "summary",
  pageKeywords: undefined,
  featuredImage: "",

};

export default Metadata
