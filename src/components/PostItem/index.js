import React from 'react'

import * as S from './styled'

const PostItem = () =>(

    <S.PostItemLink to="/slug/">
        <S.PostItemWrapper>
            <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate> 8 de julho de 2020 - 53 min de leitura</S.PostItemDate>
                <S.PostItemTitle>Crie seus sites com GatsbyJS</S.PostItemTitle>
                <S.PostItemDescription>
                    Alguns motivos para você iniciar a desenvolver sites com GatsbyJS 
                </S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
)

export default PostItem