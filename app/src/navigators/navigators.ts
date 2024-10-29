import {
  Stacks as BifoldStacks,
  Screens as BifoldScreens,
  NotificationStackParams,
} from '@hyperledger/aries-bifold-core'
import {
  ConnectStackParams,
  ContactStackParams,
  CredentialStackParams,
  DeliveryStackParams,
  HomeStackParams,
  ProofRequestsStackParams,
} from '@hyperledger/aries-bifold-core/App/types/navigators'
import { HistoryStackParams } from '@hyperledger/aries-bifold-core/lib/typescript/App/types/navigators'
import { NavigatorScreenParams } from '@react-navigation/native'
import { ImageSourcePropType } from 'react-native'

export enum Screens {
  TermsAndConditions = 'TermsAndConditions',
  Legal = 'Legal',
  OptionsPlus = 'OptionsPlus',
  Activities = 'Activities',
  Settings = 'Settings',
  Language = 'Language',
  HistoryPage = 'History',
  Notification = 'Notifications',
  CreatePIN = 'Create a PIN',
  UseBiometry = 'Use Biometry',
  HelpCenter = 'Help Center',
  HelpCenterPage = 'Help Center Page',
  About = 'About',
}

export enum Stacks {
  SettingsStack = 'Settings Stack',
  HelpCenterStack = 'Help Center Stack',
  AboutStack = 'About Stack',
  ActivitiesStack = 'Activities Stack',
}

export enum TabStacks {
  HomeStack = 'Tab Home Stack',
  ActivitiesStack = 'Tab Activities Stack',
  CredentialStack = 'Tab Credential Stack',
  OptionsPlusStack = 'Tab Options Plus Stack',
}

export type RootStackParams = {
  [BifoldScreens.Splash]: undefined
  [BifoldStacks.TabStack]: NavigatorScreenParams<TabStackParams>
  [BifoldScreens.Chat]: { connectionId: string }
  [BifoldStacks.ConnectionStack]: NavigatorScreenParams<DeliveryStackParams>
  [BifoldStacks.SettingStack]: NavigatorScreenParams<SettingStackParams>
  [BifoldStacks.ConnectStack]: NavigatorScreenParams<ConnectStackParams>
  [BifoldStacks.ContactStack]: NavigatorScreenParams<ContactStackParams>
  [BifoldStacks.ProofRequestsStack]: NavigatorScreenParams<ProofRequestsStackParams>
  [BifoldStacks.NotificationStack]: NavigatorScreenParams<NotificationStackParams>
  [BifoldStacks.HistoryStack]: NavigatorScreenParams<HistoryStackParams>
}

export type TabStackParams = {
  [TabStacks.HomeStack]: NavigatorScreenParams<HomeStackParams>
  [TabStacks.ActivitiesStack]: NavigatorScreenParams<ActivitiesStackParams>
  [TabStacks.CredentialStack]: NavigatorScreenParams<CredentialStackParams>
  [TabStacks.OptionsPlusStack]: NavigatorScreenParams<OptionsPlusStackParams>
}

export type TermsStackParams = {
  [Screens.TermsAndConditions]: undefined
  [Screens.Legal]: undefined
}

export type SettingStackParams = {
  [Screens.Settings]: undefined
  [Screens.Language]: undefined
  [Screens.HistoryPage]: undefined
  [Screens.Notification]: undefined
  [Screens.CreatePIN]: { updatePIN?: boolean }
  [Screens.UseBiometry]: undefined
}
type ItemSection = {
  title?: string
  text?: string
  visual?: ImageSourcePropType
  question?: string
  answer?: string
}
export type HelpCenterStackParams = {
  [Screens.HelpCenter]: undefined
  [Screens.HelpCenterPage]: { SelectedSection: ItemSection[] }
}
export type AboutStackParams = {
  [Screens.About]: undefined
}

export type ActivitiesStackParams = {
  [Screens.Activities]: undefined
}

export type OptionsPlusStackParams = {
  [Screens.OptionsPlus]: undefined
  [Stacks.SettingsStack]: NavigatorScreenParams<SettingStackParams>
  [Stacks.HelpCenterStack]: NavigatorScreenParams<HelpCenterStackParams>
  [Stacks.AboutStack]: NavigatorScreenParams<AboutStackParams>
}
