import { gql } from '@apollo/client';




export const IS_PALINDROME = gql`
    query IsPalindromeString($currentString:String!){
        isPalindromeString( currentString: $currentString )
  }`

export const IS_ANAGRAM = gql`
    query IsAnagramString($currentString:String!){
        isAnagramString( currentString: $currentString )
  }`