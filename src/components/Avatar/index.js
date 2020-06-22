import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Avatar = () =>{
    const {avatarImage} = useStaticQuery(
        graphql`
            query{
                avatarImage: file(relativePath: { eq: "Face-perfil.png" }){
                    childImageSharp {
                        fluid(maxWidth: 60, maxHeight:60){
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        `
    )

    return (
        <Img  
            fluid={avatarImage.childImageSharp.fluid} 
            style={{width:"60px"}}/>)

}

export default Avatar