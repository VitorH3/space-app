import styled from 'styled-components'
import tags from './tags.json'

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const TagsContainer = styled.section`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    gap: 36px;
`

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`

const Tags = () => {
    return (<>
        <TagsContainer>
            <TagTitulo>Busque por tags:</TagTitulo>
            {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
        </TagsContainer>
    </>
    )
}

export default Tags