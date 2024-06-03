import { Link, useLocalSearchParams, useRouter } from "expo-router"
import React from "react"
import { View } from "react-native"

const Details = () => {
  const {data} = useLocalSearchParams(); 

  return (
    <View>
      <Link href={{pathname: "updateForm/[onData]", params:{onData: data}}}  >Atualizar</Link>
    </View>
  )
}

export default Details