import { useAgent } from '@credo-ts/react-hooks'
import { TOKENS, useServices, useTheme } from '@hyperledger/aries-bifold-core'
import { formatTime } from '@hyperledger/aries-bifold-core/App/utils/helpers'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import HeaderText from '../../components/HeaderText'
import useHistoryDetailPageStyles from '../../hooks/useHistoryDetailPageStyles'
import { ActivitiesStackParams, Screens } from '../../navigators/navigators'
import { handleDeleteHistory } from '../../utils/historyUtils'

type PinChangeDetailsProp = StackScreenProps<ActivitiesStackParams, Screens.PinChangeDetails>

const PinChangeDetails: React.FC<PinChangeDetailsProp> = ({ route, navigation }) => {
  const { TextTheme } = useTheme()
  const { item } = route.params
  const { t } = useTranslation()
  const { agent } = useAgent()
  const [loadHistory] = useServices([TOKENS.FN_LOAD_HISTORY])
  const styles = useHistoryDetailPageStyles()

  const modifiedDate = item?.content.createdAt
    ? formatTime(item.content.createdAt, { shortMonth: true, trim: true })
    : t('Record.InvalidDate')

  const iconSize = 24

  const confirmDeleteHistory = () => {
    Alert.alert(
      t('History.Button.DeleteHistory'),
      t('History.ConfirmDeleteHistory'),
      [
        { text: t('Global.Cancel'), style: 'cancel' },
        {
          text: t('Global.Confirm'),
          style: 'destructive',
          onPress: async () => {
            await handleDeleteHistory(item.content.id || '', agent, loadHistory, t)
            navigation.goBack()
          },
        },
      ],
      { cancelable: true }
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={[styles.contentContainer, styles.headerStyle]}>
        <HeaderText title={t('History.CardDescription.WalletPinUpdated')} />
        <View style={{ marginTop: 20 }} />
        <Text style={styles.date}>
          {t('Date.ModifiedOn')} {modifiedDate}
        </Text>
      </ScrollView>

      <View style={styles.lineSeparator} />

      <TouchableOpacity
        style={styles.deleteContainer}
        onPress={confirmDeleteHistory}
        accessibilityRole="button"
        accessibilityLabel={t('History.Button.DeleteHistory')}
      >
        <MaterialCommunityIcon
          name={'trash-can-outline'}
          size={iconSize}
          style={styles.trashIcon}
          accessibilityRole="image"
          accessibilityLabel={t('History.Icon.Delete')}
        />
        <Text style={[TextTheme.normal, styles.deleteText]}>{t('History.Button.DeleteHistory')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default PinChangeDetails
