// lib imports
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Code } from 'react-content-loader'

const Showcase = ({ selectedCharacter, loading }) => selectedCharacter && (
  <ShowcaseWrapper>
    <Heading>
      {selectedCharacter.name}
    </Heading>
    {renderCharacterDetails(selectedCharacter)}
    {loading && <LoadingIndicator 
      primaryColor="#414856"
      secondaryColor="#596378"
      speed={1.5}
    />}
  </ShowcaseWrapper>
)

const renderCharacterDetails = details => {
  const detailsMapper = [
    { key: 'birth_year',  title: 'Birth Year' },
    { key: 'eye_color',   title: 'Eye Color'  },
    { key: 'gender',      title: 'Gender'     },
    { key: 'hair_color',  title: 'Hair Color' },
    { key: 'height',      title: 'Height'     },
    { key: 'mass',        title: 'Mass'       },
    { key: 'skin_color',  title: 'Skin Color' },
    { key: 'homeworld',   title: 'Homeworld'  },
    { key: 'films',       title: 'Films'      },
    { key: 'species',     title: 'Species'    },
    { key: 'starships',   title: 'Starships'  },
    { key: 'vehicles',    title: 'Vehicles'   },
  ]

  const validateData = data => {
    if(typeof data === 'string')
      return data !== 'n/a' && data !== 'unknown'

    else if(typeof data === 'object')
      return !!data.length

    else return false
  }

  return detailsMapper.map((detail, index) => validateData(details[detail.key]) && (
    <DetailWrapper key={index}>
      <Title>{`${detail.title}:`}</Title>
      <Detail>{details[detail.key]}</Detail>
    </DetailWrapper>
  ))
}

const Detail = ({ children }) => {
  if(typeof children === 'string') 
    return <DetailText>{children}</DetailText>

  else return (
    children.map((child, index) => {
      if(index !== children.length-1)
        return <DetailText key={index}>{`${child}, `}</DetailText>
      else return <DetailText key={index}>{child}</DetailText>

    })
  )
}

const ShowcaseWrapper = styled.div`
  ${({ theme }) => `
    padding: 0 ${theme.padding.horizontal.page};
  `}
`

const Heading = styled.h1`
  font-weight: 500;
  ${({ theme }) => `
    color: ${theme.palette.primary};
    font-size: ${theme.fontSize.huge};
  `};
`

const DetailWrapper = styled.p`
  padding: ${({ theme }) => theme.padding.vertical.main} 0;
`

const Title = styled.span`
  font-weight: bold;
  ${({ theme }) => `
  color: ${theme.palette.primary};
  font-size: ${theme.fontSize.main};
  `};
`

const DetailText = styled.span`
  ${({ theme }) => `
  margin-left: ${theme.padding.horizontal.level0};
  color: ${theme.palette.primary};
  font-size: ${theme.fontSize.main};
  `};
`

const LoadingIndicator = styled(Code)`
  padding: ${({ theme }) => theme.padding.vertical.main} 0;
`

const mapStateToProps = state => {
  const { selectedCharacter, loading } = state.search

  return { selectedCharacter, loading }
}

export default connect(mapStateToProps)(Showcase)