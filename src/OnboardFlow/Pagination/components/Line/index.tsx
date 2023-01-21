import React, { FC, useEffect, useState } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { PaginationProps } from '../../../types'
import {
  COLOR_PAGINATION_DEFAULT,
  COLOR_PAGINATION_SELECTED_DEFAULT,
  HORIZONTAL_PADDING_DEFAULT,
  VERTICAL_PADDING_DEFAULT,
} from '../../../constants'

export const LinePagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  paginationSelectedColor = COLOR_PAGINATION_SELECTED_DEFAULT,
  paginationColor = COLOR_PAGINATION_DEFAULT,
}) => {
  const [selectedPage, setSelectedPage] = useState(-1)
  const [sizeAnim, setSizeAnim] = useState(getToValue()) // TODO: make this animated

  function getToValue() {
    return ((currentPage + 1) / (totalPages ?? 1)) * 100
  }

  useEffect(() => {
    const toValue = getToValue()
    if (currentPage !== selectedPage) {
      setSelectedPage(currentPage)
      setSizeAnim(toValue)
    }
  }, [currentPage])

  return (
    <View
      style={[
        styles.container,
        {
          marginBottom: VERTICAL_PADDING_DEFAULT,
          marginHorizontal: HORIZONTAL_PADDING_DEFAULT,
        },
      ]}
    >
      <View style={[styles.lineContainer, { backgroundColor: paginationColor }]}>
        <Animated.View
          style={[
            styles.line,
            {
              width: sizeAnim + '%',
              backgroundColor: paginationSelectedColor,
            },
          ]}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 8,
    alignItems: 'center',
  },
  lineContainer: {
    flex: 1,
    alignItems: 'flex-start',
    borderRadius: 15,
    height: 8,
    margin: 'auto',
    backgroundColor: '#E6E6E6',
    width: '50%',
  },
  line: {
    backgroundColor: '#000000',
    borderRadius: 32,
    height: 8,
  },
})
