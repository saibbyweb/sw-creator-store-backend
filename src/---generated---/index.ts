import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

export enum StoreScalarFieldEnum {
    id = "id",
    slug = "slug",
    name = "name",
    design = "design",
    primaryColor = "primaryColor",
    secondaryColor = "secondaryColor",
    font = "font",
    influencerId = "influencerId",
    deletedAt = "deletedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum SessionScalarFieldEnum {
    id = "id",
    influencerId = "influencerId",
    token = "token",
    valid = "valid",
    expiresAt = "expiresAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum ProductScalarFieldEnum {
    id = "id",
    style = "style",
    type = "type",
    url = "url",
    position = "position",
    mediaId = "mediaId",
    title = "title",
    subTitle = "subTitle",
    buttonText = "buttonText",
    storeId = "storeId",
    published = "published",
    deletedAt = "deletedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum TaxBehaviour {
    INCLUSIVE = "INCLUSIVE",
    EXCLUSIVE = "EXCLUSIVE"
}

export enum SubscriptionStatus {
    ACTIVE = "ACTIVE",
    PAST_DUE = "PAST_DUE",
    CANCELED = "CANCELED",
    INCOMPLETE = "INCOMPLETE",
    UNPAID = "UNPAID"
}

export enum StoreDesign {
    CLASSIC = "CLASSIC",
    MODERN = "MODERN",
    CONTEMPORARY = "CONTEMPORARY",
    MINIMALISTIC = "MINIMALISTIC"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum SocialPlatform {
    INSTAGRAM = "INSTAGRAM",
    TIKTOK = "TIKTOK",
    YOUTUBE = "YOUTUBE",
    FACEBOOK = "FACEBOOK",
    X = "X",
    LINKEDIN = "LINKEDIN",
    PINTEREST = "PINTEREST",
    REDDIT = "REDDIT",
    EMAIL = "EMAIL",
    URL = "URL"
}

export enum SendMode {
    MANUAL = "MANUAL",
    AUTOMATIC = "AUTOMATIC"
}

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
    INFLUENCER = "INFLUENCER"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum ProductType {
    MEET = "MEET",
    COURSE = "COURSE",
    GUIDE = "GUIDE",
    WEBINAR = "WEBINAR",
    PERSONALIZED_VIDEO = "PERSONALIZED_VIDEO"
}

export enum ProductStyle {
    BUTTON = "BUTTON",
    CALLOUT = "CALLOUT",
    EMBED = "EMBED"
}

export enum PlanInterval {
    MONTHLY = "MONTHLY",
    YEARLY = "YEARLY"
}

export enum PaymentStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    REFUNDED = "REFUNDED"
}

export enum MediaType {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    AUDIO = "AUDIO",
    OTHER = "OTHER"
}

export enum MediaPrivacy {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE",
    SUBSCRIBERS_ONLY = "SUBSCRIBERS_ONLY"
}

export enum Font {
    MONTSERRAT = "MONTSERRAT",
    ROBOTO = "ROBOTO",
    POPPINS = "POPPINS"
}

export enum Currency {
    USD = "USD",
    EUR = "EUR",
    GBP = "GBP"
}

export enum CommunicationType {
    ACCOUNT_CREATION = "ACCOUNT_CREATION",
    ACCOUNT_UPDATE = "ACCOUNT_UPDATE",
    ADVERTISEMENT = "ADVERTISEMENT",
    SUBSCRIPTION_CREATION = "SUBSCRIPTION_CREATION",
    SUBSCRIPTION_CANCELLATION = "SUBSCRIPTION_CANCELLATION"
}

export enum CommunicationStatus {
    PENDING = "PENDING",
    SENT = "SENT",
    FAILED = "FAILED"
}

export enum CommunicationProvider {
    TWILIO = "TWILIO",
    SENDGRID = "SENDGRID",
    RESEND = "RESEND",
    MAILGUN = "MAILGUN"
}

export enum CommunicationMode {
    EMAIL = "EMAIL",
    SMS = "SMS",
    WHATSAPP = "WHATSAPP"
}

export enum MediaScalarFieldEnum {
    id = "id",
    key = "key",
    type = "type",
    influencerId = "influencerId",
    privacy = "privacy",
    deletedAt = "deletedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum InfluencerSubscriptionScalarFieldEnum {
    id = "id",
    influencerId = "influencerId",
    planId = "planId",
    stripeSubscriptionId = "stripeSubscriptionId",
    status = "status",
    currentPeriodStart = "currentPeriodStart",
    currentPeriodEnd = "currentPeriodEnd",
    cancelAt = "cancelAt",
    cancelAtPeriodEnd = "cancelAtPeriodEnd",
    active = "active",
    defaultPaymentMethodId = "defaultPaymentMethodId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum InfluencerPaymentMethodScalarFieldEnum {
    id = "id",
    last4 = "last4",
    brand = "brand",
    country = "country",
    funding = "funding",
    expMonth = "expMonth",
    expYear = "expYear",
    influencerId = "influencerId",
    stripePaymentMethodId = "stripePaymentMethodId",
    'default' = "default",
    deletedAt = "deletedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum InfluencerPaymentScalarFieldEnum {
    id = "id",
    influencerId = "influencerId",
    subscriptionId = "subscriptionId",
    amountInLowestDenomination = "amountInLowestDenomination",
    currency = "currency",
    stripePaymentIntentId = "stripePaymentIntentId",
    stripeChargeId = "stripeChargeId",
    stripeRefundId = "stripeRefundId",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum InfluencerScalarFieldEnum {
    id = "id",
    name = "name",
    username = "username",
    email = "email",
    password = "password",
    role = "role",
    countryCode = "countryCode",
    phoneNumber = "phoneNumber",
    stripeOnboardingComplete = "stripeOnboardingComplete",
    chargesEnabled = "chargesEnabled",
    payoutsEnabled = "payoutsEnabled",
    detailsSubmitted = "detailsSubmitted",
    stripeAccountId = "stripeAccountId",
    stripeAccountType = "stripeAccountType",
    stripeCustomerId = "stripeCustomerId",
    googleCalendarConnected = "googleCalendarConnected",
    googleAccessToken = "googleAccessToken",
    googleRefreshToken = "googleRefreshToken",
    googleTokenExpiry = "googleTokenExpiry",
    zoomConnected = "zoomConnected",
    zoomAccessToken = "zoomAccessToken",
    zoomRefreshToken = "zoomRefreshToken",
    zoomTokenExpiry = "zoomTokenExpiry",
    displayName = "displayName",
    bio = "bio",
    profilePicture = "profilePicture",
    deletedAt = "deletedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum InflucenerPlanScalarFieldEnum {
    id = "id",
    name = "name",
    priceInLowestDenomination = "priceInLowestDenomination",
    currency = "currency",
    interval = "interval",
    stripePriceId = "stripePriceId",
    intervalCount = "intervalCount",
    taxBehaviour = "taxBehaviour",
    deletedAt = "deletedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum CommunicationLogScalarFieldEnum {
    id = "id",
    recipient = "recipient",
    content = "content",
    providerAcknowledgmentId = "providerAcknowledgmentId",
    status = "status",
    mode = "mode",
    sendMode = "sendMode",
    type = "type",
    provider = "provider",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(CommunicationLogScalarFieldEnum, { name: 'CommunicationLogScalarFieldEnum', description: undefined })
registerEnumType(InflucenerPlanScalarFieldEnum, { name: 'InflucenerPlanScalarFieldEnum', description: undefined })
registerEnumType(InfluencerScalarFieldEnum, { name: 'InfluencerScalarFieldEnum', description: undefined })
registerEnumType(InfluencerPaymentScalarFieldEnum, { name: 'InfluencerPaymentScalarFieldEnum', description: undefined })
registerEnumType(InfluencerPaymentMethodScalarFieldEnum, { name: 'InfluencerPaymentMethodScalarFieldEnum', description: undefined })
registerEnumType(InfluencerSubscriptionScalarFieldEnum, { name: 'InfluencerSubscriptionScalarFieldEnum', description: undefined })
registerEnumType(MediaScalarFieldEnum, { name: 'MediaScalarFieldEnum', description: undefined })
registerEnumType(CommunicationMode, { name: 'CommunicationMode', description: undefined })
registerEnumType(CommunicationProvider, { name: 'CommunicationProvider', description: undefined })
registerEnumType(CommunicationStatus, { name: 'CommunicationStatus', description: undefined })
registerEnumType(CommunicationType, { name: 'CommunicationType', description: undefined })
registerEnumType(Currency, { name: 'Currency', description: undefined })
registerEnumType(Font, { name: 'Font', description: undefined })
registerEnumType(MediaPrivacy, { name: 'MediaPrivacy', description: undefined })
registerEnumType(MediaType, { name: 'MediaType', description: undefined })
registerEnumType(PaymentStatus, { name: 'PaymentStatus', description: undefined })
registerEnumType(PlanInterval, { name: 'PlanInterval', description: undefined })
registerEnumType(ProductStyle, { name: 'ProductStyle', description: undefined })
registerEnumType(ProductType, { name: 'ProductType', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(Role, { name: 'Role', description: undefined })
registerEnumType(SendMode, { name: 'SendMode', description: undefined })
registerEnumType(SocialPlatform, { name: 'SocialPlatform', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(StoreDesign, { name: 'StoreDesign', description: undefined })
registerEnumType(SubscriptionStatus, { name: 'SubscriptionStatus', description: undefined })
registerEnumType(TaxBehaviour, { name: 'TaxBehaviour', description: undefined })
registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
registerEnumType(SessionScalarFieldEnum, { name: 'SessionScalarFieldEnum', description: undefined })
registerEnumType(StoreScalarFieldEnum, { name: 'StoreScalarFieldEnum', description: undefined })

@InputType()
export class AddressCreateEnvelopeInput {
    @Field(() => AddressCreateInput, {nullable:true})
    @Type(() => AddressCreateInput)
    set?: InstanceType<typeof AddressCreateInput>;
}

@InputType()
export class AddressCreateInput {
    @Field(() => String, {nullable:false})
    street!: string;
    @Field(() => String, {nullable:false})
    city!: string;
    @Field(() => String, {nullable:false})
    state!: string;
    @Field(() => String, {nullable:false})
    postalCode!: string;
    @Field(() => String, {nullable:false})
    country!: string;
}

@InputType()
export class AddressOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    street?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    city?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    state?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    postalCode?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    country?: `${SortOrder}`;
}

@InputType()
export class AddressUpdateEnvelopeInput {
    @Field(() => AddressCreateInput, {nullable:true})
    @Type(() => AddressCreateInput)
    set?: InstanceType<typeof AddressCreateInput>;
    @Field(() => AddressUpdateInput, {nullable:true})
    @Type(() => AddressUpdateInput)
    update?: InstanceType<typeof AddressUpdateInput>;
}

@InputType()
export class AddressUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    street?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    city?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    state?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    country?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class AddressWhereInput {
    @Field(() => [AddressWhereInput], {nullable:true})
    AND?: Array<AddressWhereInput>;
    @Field(() => [AddressWhereInput], {nullable:true})
    OR?: Array<AddressWhereInput>;
    @Field(() => [AddressWhereInput], {nullable:true})
    NOT?: Array<AddressWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    street?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    city?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    state?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    postalCode?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    country?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class Address {
    @Field(() => String, {nullable:false})
    street!: string;
    @Field(() => String, {nullable:false})
    city!: string;
    @Field(() => String, {nullable:false})
    state!: string;
    @Field(() => String, {nullable:false})
    postalCode!: string;
    @Field(() => String, {nullable:false})
    country!: string;
}

@ArgsType()
export class CommunicationLogAggregateArgs {
    @Field(() => CommunicationLogWhereInput, {nullable:true})
    @Type(() => CommunicationLogWhereInput)
    where?: InstanceType<typeof CommunicationLogWhereInput>;
    @Field(() => [CommunicationLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommunicationLogOrderByWithRelationInput>;
    @Field(() => CommunicationLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommunicationLogWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class CommunicationLogCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    recipient?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    providerAcknowledgmentId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    mode?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    sendMode?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    provider?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class CommunicationLogCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    recipient!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    content?: any;
    @Field(() => String, {nullable:true})
    providerAcknowledgmentId?: string;
    @Field(() => CommunicationStatus, {nullable:false})
    status!: `${CommunicationStatus}`;
    @Field(() => CommunicationMode, {nullable:false})
    mode!: `${CommunicationMode}`;
    @Field(() => SendMode, {nullable:false})
    sendMode!: `${SendMode}`;
    @Field(() => CommunicationType, {nullable:false})
    type!: `${CommunicationType}`;
    @Field(() => CommunicationProvider, {nullable:false})
    provider!: `${CommunicationProvider}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CommunicationLogCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    recipient!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    content?: any;
    @Field(() => String, {nullable:true})
    providerAcknowledgmentId?: string;
    @Field(() => CommunicationStatus, {nullable:false})
    status!: `${CommunicationStatus}`;
    @Field(() => CommunicationMode, {nullable:false})
    mode!: `${CommunicationMode}`;
    @Field(() => SendMode, {nullable:false})
    sendMode!: `${SendMode}`;
    @Field(() => CommunicationType, {nullable:false})
    type!: `${CommunicationType}`;
    @Field(() => CommunicationProvider, {nullable:false})
    provider!: `${CommunicationProvider}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@ArgsType()
export class CommunicationLogGroupByArgs {
    @Field(() => CommunicationLogWhereInput, {nullable:true})
    @Type(() => CommunicationLogWhereInput)
    where?: InstanceType<typeof CommunicationLogWhereInput>;
    @Field(() => [CommunicationLogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CommunicationLogOrderByWithAggregationInput>;
    @Field(() => [CommunicationLogScalarFieldEnum], {nullable:false})
    by!: Array<`${CommunicationLogScalarFieldEnum}`>;
    @Field(() => CommunicationLogScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CommunicationLogScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class CommunicationLogMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    recipient?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    providerAcknowledgmentId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    mode?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    sendMode?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    provider?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class CommunicationLogMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    recipient?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    providerAcknowledgmentId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    mode?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    sendMode?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    provider?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class CommunicationLogOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    recipient?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    providerAcknowledgmentId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    mode?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    sendMode?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    provider?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => CommunicationLogCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CommunicationLogCountOrderByAggregateInput>;
    @Field(() => CommunicationLogMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CommunicationLogMaxOrderByAggregateInput>;
    @Field(() => CommunicationLogMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CommunicationLogMinOrderByAggregateInput>;
}

@InputType()
export class CommunicationLogOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    recipient?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    providerAcknowledgmentId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    mode?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    sendMode?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    provider?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class CommunicationLogScalarWhereWithAggregatesInput {
    @Field(() => [CommunicationLogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CommunicationLogScalarWhereWithAggregatesInput>;
    @Field(() => [CommunicationLogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CommunicationLogScalarWhereWithAggregatesInput>;
    @Field(() => [CommunicationLogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CommunicationLogScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    recipient?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    content?: InstanceType<typeof JsonNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    providerAcknowledgmentId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => EnumCommunicationStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumCommunicationStatusWithAggregatesFilter>;
    @Field(() => EnumCommunicationModeWithAggregatesFilter, {nullable:true})
    mode?: InstanceType<typeof EnumCommunicationModeWithAggregatesFilter>;
    @Field(() => EnumSendModeWithAggregatesFilter, {nullable:true})
    sendMode?: InstanceType<typeof EnumSendModeWithAggregatesFilter>;
    @Field(() => EnumCommunicationTypeWithAggregatesFilter, {nullable:true})
    type?: InstanceType<typeof EnumCommunicationTypeWithAggregatesFilter>;
    @Field(() => EnumCommunicationProviderWithAggregatesFilter, {nullable:true})
    provider?: InstanceType<typeof EnumCommunicationProviderWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class CommunicationLogUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    recipient!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    content?: any;
    @Field(() => String, {nullable:true})
    providerAcknowledgmentId?: string;
    @Field(() => CommunicationStatus, {nullable:false})
    status!: `${CommunicationStatus}`;
    @Field(() => CommunicationMode, {nullable:false})
    mode!: `${CommunicationMode}`;
    @Field(() => SendMode, {nullable:false})
    sendMode!: `${SendMode}`;
    @Field(() => CommunicationType, {nullable:false})
    type!: `${CommunicationType}`;
    @Field(() => CommunicationProvider, {nullable:false})
    provider!: `${CommunicationProvider}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CommunicationLogUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    recipient?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    content?: any;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    providerAcknowledgmentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumCommunicationStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumCommunicationStatusFieldUpdateOperationsInput>;
    @Field(() => EnumCommunicationModeFieldUpdateOperationsInput, {nullable:true})
    mode?: InstanceType<typeof EnumCommunicationModeFieldUpdateOperationsInput>;
    @Field(() => EnumSendModeFieldUpdateOperationsInput, {nullable:true})
    sendMode?: InstanceType<typeof EnumSendModeFieldUpdateOperationsInput>;
    @Field(() => EnumCommunicationTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumCommunicationTypeFieldUpdateOperationsInput>;
    @Field(() => EnumCommunicationProviderFieldUpdateOperationsInput, {nullable:true})
    provider?: InstanceType<typeof EnumCommunicationProviderFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommunicationLogUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    recipient?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    content?: any;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    providerAcknowledgmentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumCommunicationStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumCommunicationStatusFieldUpdateOperationsInput>;
    @Field(() => EnumCommunicationModeFieldUpdateOperationsInput, {nullable:true})
    mode?: InstanceType<typeof EnumCommunicationModeFieldUpdateOperationsInput>;
    @Field(() => EnumSendModeFieldUpdateOperationsInput, {nullable:true})
    sendMode?: InstanceType<typeof EnumSendModeFieldUpdateOperationsInput>;
    @Field(() => EnumCommunicationTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumCommunicationTypeFieldUpdateOperationsInput>;
    @Field(() => EnumCommunicationProviderFieldUpdateOperationsInput, {nullable:true})
    provider?: InstanceType<typeof EnumCommunicationProviderFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommunicationLogUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    recipient?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    content?: any;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    providerAcknowledgmentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumCommunicationStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumCommunicationStatusFieldUpdateOperationsInput>;
    @Field(() => EnumCommunicationModeFieldUpdateOperationsInput, {nullable:true})
    mode?: InstanceType<typeof EnumCommunicationModeFieldUpdateOperationsInput>;
    @Field(() => EnumSendModeFieldUpdateOperationsInput, {nullable:true})
    sendMode?: InstanceType<typeof EnumSendModeFieldUpdateOperationsInput>;
    @Field(() => EnumCommunicationTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumCommunicationTypeFieldUpdateOperationsInput>;
    @Field(() => EnumCommunicationProviderFieldUpdateOperationsInput, {nullable:true})
    provider?: InstanceType<typeof EnumCommunicationProviderFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommunicationLogUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    recipient?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    content?: any;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    providerAcknowledgmentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumCommunicationStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumCommunicationStatusFieldUpdateOperationsInput>;
    @Field(() => EnumCommunicationModeFieldUpdateOperationsInput, {nullable:true})
    mode?: InstanceType<typeof EnumCommunicationModeFieldUpdateOperationsInput>;
    @Field(() => EnumSendModeFieldUpdateOperationsInput, {nullable:true})
    sendMode?: InstanceType<typeof EnumSendModeFieldUpdateOperationsInput>;
    @Field(() => EnumCommunicationTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumCommunicationTypeFieldUpdateOperationsInput>;
    @Field(() => EnumCommunicationProviderFieldUpdateOperationsInput, {nullable:true})
    provider?: InstanceType<typeof EnumCommunicationProviderFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommunicationLogWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [CommunicationLogWhereInput], {nullable:true})
    AND?: Array<CommunicationLogWhereInput>;
    @Field(() => [CommunicationLogWhereInput], {nullable:true})
    OR?: Array<CommunicationLogWhereInput>;
    @Field(() => [CommunicationLogWhereInput], {nullable:true})
    NOT?: Array<CommunicationLogWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    recipient?: InstanceType<typeof StringFilter>;
    @Field(() => JsonNullableFilter, {nullable:true})
    content?: InstanceType<typeof JsonNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    providerAcknowledgmentId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumCommunicationStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumCommunicationStatusFilter>;
    @Field(() => EnumCommunicationModeFilter, {nullable:true})
    mode?: InstanceType<typeof EnumCommunicationModeFilter>;
    @Field(() => EnumSendModeFilter, {nullable:true})
    sendMode?: InstanceType<typeof EnumSendModeFilter>;
    @Field(() => EnumCommunicationTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumCommunicationTypeFilter>;
    @Field(() => EnumCommunicationProviderFilter, {nullable:true})
    provider?: InstanceType<typeof EnumCommunicationProviderFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class CommunicationLogWhereInput {
    @Field(() => [CommunicationLogWhereInput], {nullable:true})
    AND?: Array<CommunicationLogWhereInput>;
    @Field(() => [CommunicationLogWhereInput], {nullable:true})
    OR?: Array<CommunicationLogWhereInput>;
    @Field(() => [CommunicationLogWhereInput], {nullable:true})
    NOT?: Array<CommunicationLogWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    recipient?: InstanceType<typeof StringFilter>;
    @Field(() => JsonNullableFilter, {nullable:true})
    content?: InstanceType<typeof JsonNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    providerAcknowledgmentId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumCommunicationStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumCommunicationStatusFilter>;
    @Field(() => EnumCommunicationModeFilter, {nullable:true})
    mode?: InstanceType<typeof EnumCommunicationModeFilter>;
    @Field(() => EnumSendModeFilter, {nullable:true})
    sendMode?: InstanceType<typeof EnumSendModeFilter>;
    @Field(() => EnumCommunicationTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumCommunicationTypeFilter>;
    @Field(() => EnumCommunicationProviderFilter, {nullable:true})
    provider?: InstanceType<typeof EnumCommunicationProviderFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class CommunicationLog {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    recipient!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    content!: any | null;
    @Field(() => String, {nullable:true})
    providerAcknowledgmentId!: string | null;
    @Field(() => CommunicationStatus, {nullable:false})
    status!: `${CommunicationStatus}`;
    @Field(() => CommunicationMode, {nullable:false})
    mode!: `${CommunicationMode}`;
    @Field(() => SendMode, {nullable:false})
    sendMode!: `${SendMode}`;
    @Field(() => CommunicationType, {nullable:false})
    type!: `${CommunicationType}`;
    @Field(() => CommunicationProvider, {nullable:false})
    provider!: `${CommunicationProvider}`;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}

@ArgsType()
export class CreateManyCommunicationLogArgs {
    @Field(() => [CommunicationLogCreateManyInput], {nullable:false})
    @Type(() => CommunicationLogCreateManyInput)
    data!: Array<CommunicationLogCreateManyInput>;
}

@ArgsType()
export class CreateOneCommunicationLogArgs {
    @Field(() => CommunicationLogCreateInput, {nullable:false})
    @Type(() => CommunicationLogCreateInput)
    data!: InstanceType<typeof CommunicationLogCreateInput>;
}

@ArgsType()
export class DeleteManyCommunicationLogArgs {
    @Field(() => CommunicationLogWhereInput, {nullable:true})
    @Type(() => CommunicationLogWhereInput)
    where?: InstanceType<typeof CommunicationLogWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneCommunicationLogArgs {
    @Field(() => CommunicationLogWhereUniqueInput, {nullable:false})
    @Type(() => CommunicationLogWhereUniqueInput)
    where!: Prisma.AtLeast<CommunicationLogWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstCommunicationLogOrThrowArgs {
    @Field(() => CommunicationLogWhereInput, {nullable:true})
    @Type(() => CommunicationLogWhereInput)
    where?: InstanceType<typeof CommunicationLogWhereInput>;
    @Field(() => [CommunicationLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommunicationLogOrderByWithRelationInput>;
    @Field(() => CommunicationLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommunicationLogWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CommunicationLogScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CommunicationLogScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstCommunicationLogArgs {
    @Field(() => CommunicationLogWhereInput, {nullable:true})
    @Type(() => CommunicationLogWhereInput)
    where?: InstanceType<typeof CommunicationLogWhereInput>;
    @Field(() => [CommunicationLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommunicationLogOrderByWithRelationInput>;
    @Field(() => CommunicationLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommunicationLogWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CommunicationLogScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CommunicationLogScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyCommunicationLogArgs {
    @Field(() => CommunicationLogWhereInput, {nullable:true})
    @Type(() => CommunicationLogWhereInput)
    where?: InstanceType<typeof CommunicationLogWhereInput>;
    @Field(() => [CommunicationLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommunicationLogOrderByWithRelationInput>;
    @Field(() => CommunicationLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommunicationLogWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CommunicationLogScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CommunicationLogScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueCommunicationLogOrThrowArgs {
    @Field(() => CommunicationLogWhereUniqueInput, {nullable:false})
    @Type(() => CommunicationLogWhereUniqueInput)
    where!: Prisma.AtLeast<CommunicationLogWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueCommunicationLogArgs {
    @Field(() => CommunicationLogWhereUniqueInput, {nullable:false})
    @Type(() => CommunicationLogWhereUniqueInput)
    where!: Prisma.AtLeast<CommunicationLogWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyCommunicationLogArgs {
    @Field(() => CommunicationLogUpdateManyMutationInput, {nullable:false})
    @Type(() => CommunicationLogUpdateManyMutationInput)
    data!: InstanceType<typeof CommunicationLogUpdateManyMutationInput>;
    @Field(() => CommunicationLogWhereInput, {nullable:true})
    @Type(() => CommunicationLogWhereInput)
    where?: InstanceType<typeof CommunicationLogWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneCommunicationLogArgs {
    @Field(() => CommunicationLogUpdateInput, {nullable:false})
    @Type(() => CommunicationLogUpdateInput)
    data!: InstanceType<typeof CommunicationLogUpdateInput>;
    @Field(() => CommunicationLogWhereUniqueInput, {nullable:false})
    @Type(() => CommunicationLogWhereUniqueInput)
    where!: Prisma.AtLeast<CommunicationLogWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneCommunicationLogArgs {
    @Field(() => CommunicationLogWhereUniqueInput, {nullable:false})
    @Type(() => CommunicationLogWhereUniqueInput)
    where!: Prisma.AtLeast<CommunicationLogWhereUniqueInput, 'id'>;
    @Field(() => CommunicationLogCreateInput, {nullable:false})
    @Type(() => CommunicationLogCreateInput)
    create!: InstanceType<typeof CommunicationLogCreateInput>;
    @Field(() => CommunicationLogUpdateInput, {nullable:false})
    @Type(() => CommunicationLogUpdateInput)
    update!: InstanceType<typeof CommunicationLogUpdateInput>;
}

@ArgsType()
export class CreateManyInflucenerPlanArgs {
    @Field(() => [InflucenerPlanCreateManyInput], {nullable:false})
    @Type(() => InflucenerPlanCreateManyInput)
    data!: Array<InflucenerPlanCreateManyInput>;
}

@ArgsType()
export class CreateOneInflucenerPlanArgs {
    @Field(() => InflucenerPlanCreateInput, {nullable:false})
    @Type(() => InflucenerPlanCreateInput)
    data!: InstanceType<typeof InflucenerPlanCreateInput>;
}

@ArgsType()
export class DeleteManyInflucenerPlanArgs {
    @Field(() => InflucenerPlanWhereInput, {nullable:true})
    @Type(() => InflucenerPlanWhereInput)
    where?: InstanceType<typeof InflucenerPlanWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneInflucenerPlanArgs {
    @Field(() => InflucenerPlanWhereUniqueInput, {nullable:false})
    @Type(() => InflucenerPlanWhereUniqueInput)
    where!: Prisma.AtLeast<InflucenerPlanWhereUniqueInput, 'id' | 'stripePriceId'>;
}

@ArgsType()
export class FindFirstInflucenerPlanOrThrowArgs {
    @Field(() => InflucenerPlanWhereInput, {nullable:true})
    @Type(() => InflucenerPlanWhereInput)
    where?: InstanceType<typeof InflucenerPlanWhereInput>;
    @Field(() => [InflucenerPlanOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InflucenerPlanOrderByWithRelationInput>;
    @Field(() => InflucenerPlanWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InflucenerPlanWhereUniqueInput, 'id' | 'stripePriceId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [InflucenerPlanScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InflucenerPlanScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstInflucenerPlanArgs {
    @Field(() => InflucenerPlanWhereInput, {nullable:true})
    @Type(() => InflucenerPlanWhereInput)
    where?: InstanceType<typeof InflucenerPlanWhereInput>;
    @Field(() => [InflucenerPlanOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InflucenerPlanOrderByWithRelationInput>;
    @Field(() => InflucenerPlanWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InflucenerPlanWhereUniqueInput, 'id' | 'stripePriceId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [InflucenerPlanScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InflucenerPlanScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyInflucenerPlanArgs {
    @Field(() => InflucenerPlanWhereInput, {nullable:true})
    @Type(() => InflucenerPlanWhereInput)
    where?: InstanceType<typeof InflucenerPlanWhereInput>;
    @Field(() => [InflucenerPlanOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InflucenerPlanOrderByWithRelationInput>;
    @Field(() => InflucenerPlanWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InflucenerPlanWhereUniqueInput, 'id' | 'stripePriceId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [InflucenerPlanScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InflucenerPlanScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueInflucenerPlanOrThrowArgs {
    @Field(() => InflucenerPlanWhereUniqueInput, {nullable:false})
    @Type(() => InflucenerPlanWhereUniqueInput)
    where!: Prisma.AtLeast<InflucenerPlanWhereUniqueInput, 'id' | 'stripePriceId'>;
}

@ArgsType()
export class FindUniqueInflucenerPlanArgs {
    @Field(() => InflucenerPlanWhereUniqueInput, {nullable:false})
    @Type(() => InflucenerPlanWhereUniqueInput)
    where!: Prisma.AtLeast<InflucenerPlanWhereUniqueInput, 'id' | 'stripePriceId'>;
}

@ArgsType()
export class InflucenerPlanAggregateArgs {
    @Field(() => InflucenerPlanWhereInput, {nullable:true})
    @Type(() => InflucenerPlanWhereInput)
    where?: InstanceType<typeof InflucenerPlanWhereInput>;
    @Field(() => [InflucenerPlanOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InflucenerPlanOrderByWithRelationInput>;
    @Field(() => InflucenerPlanWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InflucenerPlanWhereUniqueInput, 'id' | 'stripePriceId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class InflucenerPlanAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    priceInLowestDenomination?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    intervalCount?: `${SortOrder}`;
}

@InputType()
export class InflucenerPlanCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    priceInLowestDenomination?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currency?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    interval?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripePriceId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    intervalCount?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    taxBehaviour?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class InflucenerPlanCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    priceInLowestDenomination!: number;
    @Field(() => Currency, {nullable:false})
    currency!: `${Currency}`;
    @Field(() => PlanInterval, {nullable:false})
    interval!: `${PlanInterval}`;
    @Field(() => String, {nullable:true})
    stripePriceId?: string;
    @Field(() => Int, {nullable:false})
    intervalCount!: number;
    @Field(() => TaxBehaviour, {nullable:false})
    taxBehaviour!: `${TaxBehaviour}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InflucenerPlanCreateNestedOneWithoutInfluencerSubscriptionsInput {
    @Field(() => InflucenerPlanCreateWithoutInfluencerSubscriptionsInput, {nullable:true})
    @Type(() => InflucenerPlanCreateWithoutInfluencerSubscriptionsInput)
    create?: InstanceType<typeof InflucenerPlanCreateWithoutInfluencerSubscriptionsInput>;
    @Field(() => InflucenerPlanCreateOrConnectWithoutInfluencerSubscriptionsInput, {nullable:true})
    @Type(() => InflucenerPlanCreateOrConnectWithoutInfluencerSubscriptionsInput)
    connectOrCreate?: InstanceType<typeof InflucenerPlanCreateOrConnectWithoutInfluencerSubscriptionsInput>;
    @Field(() => InflucenerPlanWhereUniqueInput, {nullable:true})
    @Type(() => InflucenerPlanWhereUniqueInput)
    connect?: Prisma.AtLeast<InflucenerPlanWhereUniqueInput, 'id' | 'stripePriceId'>;
}

@InputType()
export class InflucenerPlanCreateOrConnectWithoutInfluencerSubscriptionsInput {
    @Field(() => InflucenerPlanWhereUniqueInput, {nullable:false})
    @Type(() => InflucenerPlanWhereUniqueInput)
    where!: Prisma.AtLeast<InflucenerPlanWhereUniqueInput, 'id' | 'stripePriceId'>;
    @Field(() => InflucenerPlanCreateWithoutInfluencerSubscriptionsInput, {nullable:false})
    @Type(() => InflucenerPlanCreateWithoutInfluencerSubscriptionsInput)
    create!: InstanceType<typeof InflucenerPlanCreateWithoutInfluencerSubscriptionsInput>;
}

@InputType()
export class InflucenerPlanCreateWithoutInfluencerSubscriptionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    priceInLowestDenomination!: number;
    @Field(() => Currency, {nullable:false})
    currency!: `${Currency}`;
    @Field(() => PlanInterval, {nullable:false})
    interval!: `${PlanInterval}`;
    @Field(() => String, {nullable:true})
    stripePriceId?: string;
    @Field(() => Int, {nullable:false})
    intervalCount!: number;
    @Field(() => TaxBehaviour, {nullable:false})
    taxBehaviour!: `${TaxBehaviour}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InflucenerPlanCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    priceInLowestDenomination!: number;
    @Field(() => Currency, {nullable:false})
    currency!: `${Currency}`;
    @Field(() => PlanInterval, {nullable:false})
    interval!: `${PlanInterval}`;
    @Field(() => String, {nullable:true})
    stripePriceId?: string;
    @Field(() => Int, {nullable:false})
    intervalCount!: number;
    @Field(() => TaxBehaviour, {nullable:false})
    taxBehaviour!: `${TaxBehaviour}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InfluencerSubscriptionCreateNestedManyWithoutPlanInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionCreateNestedManyWithoutPlanInput>;
}

@ArgsType()
export class InflucenerPlanGroupByArgs {
    @Field(() => InflucenerPlanWhereInput, {nullable:true})
    @Type(() => InflucenerPlanWhereInput)
    where?: InstanceType<typeof InflucenerPlanWhereInput>;
    @Field(() => [InflucenerPlanOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<InflucenerPlanOrderByWithAggregationInput>;
    @Field(() => [InflucenerPlanScalarFieldEnum], {nullable:false})
    by!: Array<`${InflucenerPlanScalarFieldEnum}`>;
    @Field(() => InflucenerPlanScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof InflucenerPlanScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class InflucenerPlanMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    priceInLowestDenomination?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currency?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    interval?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripePriceId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    intervalCount?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    taxBehaviour?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class InflucenerPlanMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    priceInLowestDenomination?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currency?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    interval?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripePriceId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    intervalCount?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    taxBehaviour?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class InflucenerPlanOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    priceInLowestDenomination?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currency?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    interval?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripePriceId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    intervalCount?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    taxBehaviour?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => InflucenerPlanCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof InflucenerPlanCountOrderByAggregateInput>;
    @Field(() => InflucenerPlanAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof InflucenerPlanAvgOrderByAggregateInput>;
    @Field(() => InflucenerPlanMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof InflucenerPlanMaxOrderByAggregateInput>;
    @Field(() => InflucenerPlanMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof InflucenerPlanMinOrderByAggregateInput>;
    @Field(() => InflucenerPlanSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof InflucenerPlanSumOrderByAggregateInput>;
}

@InputType()
export class InflucenerPlanOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    priceInLowestDenomination?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currency?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    interval?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripePriceId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    intervalCount?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    taxBehaviour?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => InfluencerSubscriptionOrderByRelationAggregateInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionOrderByRelationAggregateInput>;
}

@InputType()
export class InflucenerPlanScalarRelationFilter {
    @Field(() => InflucenerPlanWhereInput, {nullable:true})
    is?: InstanceType<typeof InflucenerPlanWhereInput>;
    @Field(() => InflucenerPlanWhereInput, {nullable:true})
    isNot?: InstanceType<typeof InflucenerPlanWhereInput>;
}

@InputType()
export class InflucenerPlanScalarWhereWithAggregatesInput {
    @Field(() => [InflucenerPlanScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<InflucenerPlanScalarWhereWithAggregatesInput>;
    @Field(() => [InflucenerPlanScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<InflucenerPlanScalarWhereWithAggregatesInput>;
    @Field(() => [InflucenerPlanScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<InflucenerPlanScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    priceInLowestDenomination?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => EnumCurrencyWithAggregatesFilter, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyWithAggregatesFilter>;
    @Field(() => EnumPlanIntervalWithAggregatesFilter, {nullable:true})
    interval?: InstanceType<typeof EnumPlanIntervalWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    stripePriceId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    intervalCount?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => EnumTaxBehaviourWithAggregatesFilter, {nullable:true})
    taxBehaviour?: InstanceType<typeof EnumTaxBehaviourWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class InflucenerPlanSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    priceInLowestDenomination?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    intervalCount?: `${SortOrder}`;
}

@InputType()
export class InflucenerPlanUncheckedCreateWithoutInfluencerSubscriptionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    priceInLowestDenomination!: number;
    @Field(() => Currency, {nullable:false})
    currency!: `${Currency}`;
    @Field(() => PlanInterval, {nullable:false})
    interval!: `${PlanInterval}`;
    @Field(() => String, {nullable:true})
    stripePriceId?: string;
    @Field(() => Int, {nullable:false})
    intervalCount!: number;
    @Field(() => TaxBehaviour, {nullable:false})
    taxBehaviour!: `${TaxBehaviour}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InflucenerPlanUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    priceInLowestDenomination!: number;
    @Field(() => Currency, {nullable:false})
    currency!: `${Currency}`;
    @Field(() => PlanInterval, {nullable:false})
    interval!: `${PlanInterval}`;
    @Field(() => String, {nullable:true})
    stripePriceId?: string;
    @Field(() => Int, {nullable:false})
    intervalCount!: number;
    @Field(() => TaxBehaviour, {nullable:false})
    taxBehaviour!: `${TaxBehaviour}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InfluencerSubscriptionUncheckedCreateNestedManyWithoutPlanInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUncheckedCreateNestedManyWithoutPlanInput>;
}

@InputType()
export class InflucenerPlanUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    priceInLowestDenomination?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumCurrencyFieldUpdateOperationsInput, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFieldUpdateOperationsInput>;
    @Field(() => EnumPlanIntervalFieldUpdateOperationsInput, {nullable:true})
    interval?: InstanceType<typeof EnumPlanIntervalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePriceId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    intervalCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumTaxBehaviourFieldUpdateOperationsInput, {nullable:true})
    taxBehaviour?: InstanceType<typeof EnumTaxBehaviourFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InflucenerPlanUncheckedUpdateWithoutInfluencerSubscriptionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    priceInLowestDenomination?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumCurrencyFieldUpdateOperationsInput, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFieldUpdateOperationsInput>;
    @Field(() => EnumPlanIntervalFieldUpdateOperationsInput, {nullable:true})
    interval?: InstanceType<typeof EnumPlanIntervalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePriceId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    intervalCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumTaxBehaviourFieldUpdateOperationsInput, {nullable:true})
    taxBehaviour?: InstanceType<typeof EnumTaxBehaviourFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InflucenerPlanUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    priceInLowestDenomination?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumCurrencyFieldUpdateOperationsInput, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFieldUpdateOperationsInput>;
    @Field(() => EnumPlanIntervalFieldUpdateOperationsInput, {nullable:true})
    interval?: InstanceType<typeof EnumPlanIntervalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePriceId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    intervalCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumTaxBehaviourFieldUpdateOperationsInput, {nullable:true})
    taxBehaviour?: InstanceType<typeof EnumTaxBehaviourFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InfluencerSubscriptionUncheckedUpdateManyWithoutPlanNestedInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUncheckedUpdateManyWithoutPlanNestedInput>;
}

@InputType()
export class InflucenerPlanUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    priceInLowestDenomination?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumCurrencyFieldUpdateOperationsInput, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFieldUpdateOperationsInput>;
    @Field(() => EnumPlanIntervalFieldUpdateOperationsInput, {nullable:true})
    interval?: InstanceType<typeof EnumPlanIntervalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePriceId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    intervalCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumTaxBehaviourFieldUpdateOperationsInput, {nullable:true})
    taxBehaviour?: InstanceType<typeof EnumTaxBehaviourFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InflucenerPlanUpdateOneRequiredWithoutInfluencerSubscriptionsNestedInput {
    @Field(() => InflucenerPlanCreateWithoutInfluencerSubscriptionsInput, {nullable:true})
    @Type(() => InflucenerPlanCreateWithoutInfluencerSubscriptionsInput)
    create?: InstanceType<typeof InflucenerPlanCreateWithoutInfluencerSubscriptionsInput>;
    @Field(() => InflucenerPlanCreateOrConnectWithoutInfluencerSubscriptionsInput, {nullable:true})
    @Type(() => InflucenerPlanCreateOrConnectWithoutInfluencerSubscriptionsInput)
    connectOrCreate?: InstanceType<typeof InflucenerPlanCreateOrConnectWithoutInfluencerSubscriptionsInput>;
    @Field(() => InflucenerPlanUpsertWithoutInfluencerSubscriptionsInput, {nullable:true})
    @Type(() => InflucenerPlanUpsertWithoutInfluencerSubscriptionsInput)
    upsert?: InstanceType<typeof InflucenerPlanUpsertWithoutInfluencerSubscriptionsInput>;
    @Field(() => InflucenerPlanWhereUniqueInput, {nullable:true})
    @Type(() => InflucenerPlanWhereUniqueInput)
    connect?: Prisma.AtLeast<InflucenerPlanWhereUniqueInput, 'id' | 'stripePriceId'>;
    @Field(() => InflucenerPlanUpdateToOneWithWhereWithoutInfluencerSubscriptionsInput, {nullable:true})
    @Type(() => InflucenerPlanUpdateToOneWithWhereWithoutInfluencerSubscriptionsInput)
    update?: InstanceType<typeof InflucenerPlanUpdateToOneWithWhereWithoutInfluencerSubscriptionsInput>;
}

@InputType()
export class InflucenerPlanUpdateToOneWithWhereWithoutInfluencerSubscriptionsInput {
    @Field(() => InflucenerPlanWhereInput, {nullable:true})
    @Type(() => InflucenerPlanWhereInput)
    where?: InstanceType<typeof InflucenerPlanWhereInput>;
    @Field(() => InflucenerPlanUpdateWithoutInfluencerSubscriptionsInput, {nullable:false})
    @Type(() => InflucenerPlanUpdateWithoutInfluencerSubscriptionsInput)
    data!: InstanceType<typeof InflucenerPlanUpdateWithoutInfluencerSubscriptionsInput>;
}

@InputType()
export class InflucenerPlanUpdateWithoutInfluencerSubscriptionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    priceInLowestDenomination?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumCurrencyFieldUpdateOperationsInput, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFieldUpdateOperationsInput>;
    @Field(() => EnumPlanIntervalFieldUpdateOperationsInput, {nullable:true})
    interval?: InstanceType<typeof EnumPlanIntervalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePriceId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    intervalCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumTaxBehaviourFieldUpdateOperationsInput, {nullable:true})
    taxBehaviour?: InstanceType<typeof EnumTaxBehaviourFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InflucenerPlanUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    priceInLowestDenomination?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumCurrencyFieldUpdateOperationsInput, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFieldUpdateOperationsInput>;
    @Field(() => EnumPlanIntervalFieldUpdateOperationsInput, {nullable:true})
    interval?: InstanceType<typeof EnumPlanIntervalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePriceId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    intervalCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumTaxBehaviourFieldUpdateOperationsInput, {nullable:true})
    taxBehaviour?: InstanceType<typeof EnumTaxBehaviourFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InfluencerSubscriptionUpdateManyWithoutPlanNestedInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUpdateManyWithoutPlanNestedInput>;
}

@InputType()
export class InflucenerPlanUpsertWithoutInfluencerSubscriptionsInput {
    @Field(() => InflucenerPlanUpdateWithoutInfluencerSubscriptionsInput, {nullable:false})
    @Type(() => InflucenerPlanUpdateWithoutInfluencerSubscriptionsInput)
    update!: InstanceType<typeof InflucenerPlanUpdateWithoutInfluencerSubscriptionsInput>;
    @Field(() => InflucenerPlanCreateWithoutInfluencerSubscriptionsInput, {nullable:false})
    @Type(() => InflucenerPlanCreateWithoutInfluencerSubscriptionsInput)
    create!: InstanceType<typeof InflucenerPlanCreateWithoutInfluencerSubscriptionsInput>;
    @Field(() => InflucenerPlanWhereInput, {nullable:true})
    @Type(() => InflucenerPlanWhereInput)
    where?: InstanceType<typeof InflucenerPlanWhereInput>;
}

@InputType()
export class InflucenerPlanWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    stripePriceId?: string;
    @Field(() => [InflucenerPlanWhereInput], {nullable:true})
    AND?: Array<InflucenerPlanWhereInput>;
    @Field(() => [InflucenerPlanWhereInput], {nullable:true})
    OR?: Array<InflucenerPlanWhereInput>;
    @Field(() => [InflucenerPlanWhereInput], {nullable:true})
    NOT?: Array<InflucenerPlanWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    priceInLowestDenomination?: InstanceType<typeof IntFilter>;
    @Field(() => EnumCurrencyFilter, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFilter>;
    @Field(() => EnumPlanIntervalFilter, {nullable:true})
    interval?: InstanceType<typeof EnumPlanIntervalFilter>;
    @Field(() => IntFilter, {nullable:true})
    intervalCount?: InstanceType<typeof IntFilter>;
    @Field(() => EnumTaxBehaviourFilter, {nullable:true})
    taxBehaviour?: InstanceType<typeof EnumTaxBehaviourFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => InfluencerSubscriptionListRelationFilter, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionListRelationFilter>;
}

@InputType()
export class InflucenerPlanWhereInput {
    @Field(() => [InflucenerPlanWhereInput], {nullable:true})
    AND?: Array<InflucenerPlanWhereInput>;
    @Field(() => [InflucenerPlanWhereInput], {nullable:true})
    OR?: Array<InflucenerPlanWhereInput>;
    @Field(() => [InflucenerPlanWhereInput], {nullable:true})
    NOT?: Array<InflucenerPlanWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    priceInLowestDenomination?: InstanceType<typeof IntFilter>;
    @Field(() => EnumCurrencyFilter, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFilter>;
    @Field(() => EnumPlanIntervalFilter, {nullable:true})
    interval?: InstanceType<typeof EnumPlanIntervalFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    stripePriceId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => IntFilter, {nullable:true})
    intervalCount?: InstanceType<typeof IntFilter>;
    @Field(() => EnumTaxBehaviourFilter, {nullable:true})
    taxBehaviour?: InstanceType<typeof EnumTaxBehaviourFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => InfluencerSubscriptionListRelationFilter, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionListRelationFilter>;
}

@ObjectType()
export class InflucenerPlan {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    priceInLowestDenomination!: number;
    @Field(() => Currency, {nullable:false})
    currency!: `${Currency}`;
    @Field(() => PlanInterval, {nullable:false})
    interval!: `${PlanInterval}`;
    @Field(() => String, {nullable:true})
    stripePriceId!: string | null;
    @Field(() => Int, {nullable:false})
    intervalCount!: number;
    @Field(() => TaxBehaviour, {nullable:false})
    taxBehaviour!: `${TaxBehaviour}`;
    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [InfluencerSubscription], {nullable:true})
    influencerSubscriptions?: Array<InfluencerSubscription>;
}

@ArgsType()
export class UpdateManyInflucenerPlanArgs {
    @Field(() => InflucenerPlanUpdateManyMutationInput, {nullable:false})
    @Type(() => InflucenerPlanUpdateManyMutationInput)
    data!: InstanceType<typeof InflucenerPlanUpdateManyMutationInput>;
    @Field(() => InflucenerPlanWhereInput, {nullable:true})
    @Type(() => InflucenerPlanWhereInput)
    where?: InstanceType<typeof InflucenerPlanWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneInflucenerPlanArgs {
    @Field(() => InflucenerPlanUpdateInput, {nullable:false})
    @Type(() => InflucenerPlanUpdateInput)
    data!: InstanceType<typeof InflucenerPlanUpdateInput>;
    @Field(() => InflucenerPlanWhereUniqueInput, {nullable:false})
    @Type(() => InflucenerPlanWhereUniqueInput)
    where!: Prisma.AtLeast<InflucenerPlanWhereUniqueInput, 'id' | 'stripePriceId'>;
}

@ArgsType()
export class UpsertOneInflucenerPlanArgs {
    @Field(() => InflucenerPlanWhereUniqueInput, {nullable:false})
    @Type(() => InflucenerPlanWhereUniqueInput)
    where!: Prisma.AtLeast<InflucenerPlanWhereUniqueInput, 'id' | 'stripePriceId'>;
    @Field(() => InflucenerPlanCreateInput, {nullable:false})
    @Type(() => InflucenerPlanCreateInput)
    create!: InstanceType<typeof InflucenerPlanCreateInput>;
    @Field(() => InflucenerPlanUpdateInput, {nullable:false})
    @Type(() => InflucenerPlanUpdateInput)
    update!: InstanceType<typeof InflucenerPlanUpdateInput>;
}

@ArgsType()
export class CreateManyInfluencerArgs {
    @Field(() => [InfluencerCreateManyInput], {nullable:false})
    @Type(() => InfluencerCreateManyInput)
    data!: Array<InfluencerCreateManyInput>;
}

@ArgsType()
export class CreateOneInfluencerArgs {
    @Field(() => InfluencerCreateInput, {nullable:false})
    @Type(() => InfluencerCreateInput)
    data!: InstanceType<typeof InfluencerCreateInput>;
}

@ArgsType()
export class DeleteManyInfluencerArgs {
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneInfluencerArgs {
    @Field(() => InfluencerWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
}

@ArgsType()
export class FindFirstInfluencerOrThrowArgs {
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => [InfluencerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerOrderByWithRelationInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [InfluencerScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InfluencerScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstInfluencerArgs {
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => [InfluencerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerOrderByWithRelationInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [InfluencerScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InfluencerScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyInfluencerArgs {
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => [InfluencerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerOrderByWithRelationInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [InfluencerScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InfluencerScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueInfluencerOrThrowArgs {
    @Field(() => InfluencerWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
}

@ArgsType()
export class FindUniqueInfluencerArgs {
    @Field(() => InfluencerWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
}

@ArgsType()
export class InfluencerAggregateArgs {
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => [InfluencerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerOrderByWithRelationInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class InfluencerCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    countryCode?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeOnboardingComplete?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    chargesEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    payoutsEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    detailsSubmitted?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeAccountId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeAccountType?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeCustomerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleCalendarConnected?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleAccessToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleRefreshToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleTokenExpiry?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomConnected?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomAccessToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomRefreshToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomTokenExpiry?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    displayName?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bio?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    profilePicture?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class InfluencerCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:false})
    countryCode!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    address!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => String, {nullable:true})
    stripeCustomerId?: string;
    @Field(() => Boolean, {nullable:true})
    googleCalendarConnected?: boolean;
    @Field(() => String, {nullable:true})
    googleAccessToken?: string;
    @Field(() => String, {nullable:true})
    googleRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    googleTokenExpiry?: Date | string;
    @Field(() => Boolean, {nullable:true})
    zoomConnected?: boolean;
    @Field(() => String, {nullable:true})
    zoomAccessToken?: string;
    @Field(() => String, {nullable:true})
    zoomRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    zoomTokenExpiry?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    profilePicture?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InfluencerCreateNestedOneWithoutInfluencerPaymentsInput {
    @Field(() => InfluencerCreateWithoutInfluencerPaymentsInput, {nullable:true})
    @Type(() => InfluencerCreateWithoutInfluencerPaymentsInput)
    create?: InstanceType<typeof InfluencerCreateWithoutInfluencerPaymentsInput>;
    @Field(() => InfluencerCreateOrConnectWithoutInfluencerPaymentsInput, {nullable:true})
    @Type(() => InfluencerCreateOrConnectWithoutInfluencerPaymentsInput)
    connectOrCreate?: InstanceType<typeof InfluencerCreateOrConnectWithoutInfluencerPaymentsInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    @Type(() => InfluencerWhereUniqueInput)
    connect?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
}

@InputType()
export class InfluencerCreateNestedOneWithoutInfluencerSubscriptionsInput {
    @Field(() => InfluencerCreateWithoutInfluencerSubscriptionsInput, {nullable:true})
    @Type(() => InfluencerCreateWithoutInfluencerSubscriptionsInput)
    create?: InstanceType<typeof InfluencerCreateWithoutInfluencerSubscriptionsInput>;
    @Field(() => InfluencerCreateOrConnectWithoutInfluencerSubscriptionsInput, {nullable:true})
    @Type(() => InfluencerCreateOrConnectWithoutInfluencerSubscriptionsInput)
    connectOrCreate?: InstanceType<typeof InfluencerCreateOrConnectWithoutInfluencerSubscriptionsInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    @Type(() => InfluencerWhereUniqueInput)
    connect?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
}

@InputType()
export class InfluencerCreateNestedOneWithoutMediaInput {
    @Field(() => InfluencerCreateWithoutMediaInput, {nullable:true})
    @Type(() => InfluencerCreateWithoutMediaInput)
    create?: InstanceType<typeof InfluencerCreateWithoutMediaInput>;
    @Field(() => InfluencerCreateOrConnectWithoutMediaInput, {nullable:true})
    @Type(() => InfluencerCreateOrConnectWithoutMediaInput)
    connectOrCreate?: InstanceType<typeof InfluencerCreateOrConnectWithoutMediaInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    @Type(() => InfluencerWhereUniqueInput)
    connect?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
}

@InputType()
export class InfluencerCreateNestedOneWithoutPaymentMethodsInput {
    @Field(() => InfluencerCreateWithoutPaymentMethodsInput, {nullable:true})
    @Type(() => InfluencerCreateWithoutPaymentMethodsInput)
    create?: InstanceType<typeof InfluencerCreateWithoutPaymentMethodsInput>;
    @Field(() => InfluencerCreateOrConnectWithoutPaymentMethodsInput, {nullable:true})
    @Type(() => InfluencerCreateOrConnectWithoutPaymentMethodsInput)
    connectOrCreate?: InstanceType<typeof InfluencerCreateOrConnectWithoutPaymentMethodsInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    @Type(() => InfluencerWhereUniqueInput)
    connect?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
}

@InputType()
export class InfluencerCreateNestedOneWithoutSessionsInput {
    @Field(() => InfluencerCreateWithoutSessionsInput, {nullable:true})
    @Type(() => InfluencerCreateWithoutSessionsInput)
    create?: InstanceType<typeof InfluencerCreateWithoutSessionsInput>;
    @Field(() => InfluencerCreateOrConnectWithoutSessionsInput, {nullable:true})
    @Type(() => InfluencerCreateOrConnectWithoutSessionsInput)
    connectOrCreate?: InstanceType<typeof InfluencerCreateOrConnectWithoutSessionsInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    @Type(() => InfluencerWhereUniqueInput)
    connect?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
}

@InputType()
export class InfluencerCreateNestedOneWithoutStoresInput {
    @Field(() => InfluencerCreateWithoutStoresInput, {nullable:true})
    @Type(() => InfluencerCreateWithoutStoresInput)
    create?: InstanceType<typeof InfluencerCreateWithoutStoresInput>;
    @Field(() => InfluencerCreateOrConnectWithoutStoresInput, {nullable:true})
    @Type(() => InfluencerCreateOrConnectWithoutStoresInput)
    connectOrCreate?: InstanceType<typeof InfluencerCreateOrConnectWithoutStoresInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    @Type(() => InfluencerWhereUniqueInput)
    connect?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
}

@InputType()
export class InfluencerCreateOrConnectWithoutInfluencerPaymentsInput {
    @Field(() => InfluencerWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
    @Field(() => InfluencerCreateWithoutInfluencerPaymentsInput, {nullable:false})
    @Type(() => InfluencerCreateWithoutInfluencerPaymentsInput)
    create!: InstanceType<typeof InfluencerCreateWithoutInfluencerPaymentsInput>;
}

@InputType()
export class InfluencerCreateOrConnectWithoutInfluencerSubscriptionsInput {
    @Field(() => InfluencerWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
    @Field(() => InfluencerCreateWithoutInfluencerSubscriptionsInput, {nullable:false})
    @Type(() => InfluencerCreateWithoutInfluencerSubscriptionsInput)
    create!: InstanceType<typeof InfluencerCreateWithoutInfluencerSubscriptionsInput>;
}

@InputType()
export class InfluencerCreateOrConnectWithoutMediaInput {
    @Field(() => InfluencerWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
    @Field(() => InfluencerCreateWithoutMediaInput, {nullable:false})
    @Type(() => InfluencerCreateWithoutMediaInput)
    create!: InstanceType<typeof InfluencerCreateWithoutMediaInput>;
}

@InputType()
export class InfluencerCreateOrConnectWithoutPaymentMethodsInput {
    @Field(() => InfluencerWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
    @Field(() => InfluencerCreateWithoutPaymentMethodsInput, {nullable:false})
    @Type(() => InfluencerCreateWithoutPaymentMethodsInput)
    create!: InstanceType<typeof InfluencerCreateWithoutPaymentMethodsInput>;
}

@InputType()
export class InfluencerCreateOrConnectWithoutSessionsInput {
    @Field(() => InfluencerWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
    @Field(() => InfluencerCreateWithoutSessionsInput, {nullable:false})
    @Type(() => InfluencerCreateWithoutSessionsInput)
    create!: InstanceType<typeof InfluencerCreateWithoutSessionsInput>;
}

@InputType()
export class InfluencerCreateOrConnectWithoutStoresInput {
    @Field(() => InfluencerWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
    @Field(() => InfluencerCreateWithoutStoresInput, {nullable:false})
    @Type(() => InfluencerCreateWithoutStoresInput)
    create!: InstanceType<typeof InfluencerCreateWithoutStoresInput>;
}

@InputType()
export class InfluencerCreateWithoutInfluencerPaymentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:false})
    countryCode!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    address!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => String, {nullable:true})
    stripeCustomerId?: string;
    @Field(() => Boolean, {nullable:true})
    googleCalendarConnected?: boolean;
    @Field(() => String, {nullable:true})
    googleAccessToken?: string;
    @Field(() => String, {nullable:true})
    googleRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    googleTokenExpiry?: Date | string;
    @Field(() => Boolean, {nullable:true})
    zoomConnected?: boolean;
    @Field(() => String, {nullable:true})
    zoomAccessToken?: string;
    @Field(() => String, {nullable:true})
    zoomRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    zoomTokenExpiry?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    profilePicture?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StoreCreateNestedManyWithoutInfluencerInput, {nullable:true})
    stores?: InstanceType<typeof StoreCreateNestedManyWithoutInfluencerInput>;
    @Field(() => MediaCreateNestedManyWithoutInfluencerInput, {nullable:true})
    media?: InstanceType<typeof MediaCreateNestedManyWithoutInfluencerInput>;
    @Field(() => SessionCreateNestedManyWithoutInfluencerInput, {nullable:true})
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentMethodCreateNestedManyWithoutInfluencerInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerSubscriptionCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionCreateNestedManyWithoutInfluencerInput>;
}

@InputType()
export class InfluencerCreateWithoutInfluencerSubscriptionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:false})
    countryCode!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    address!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => String, {nullable:true})
    stripeCustomerId?: string;
    @Field(() => Boolean, {nullable:true})
    googleCalendarConnected?: boolean;
    @Field(() => String, {nullable:true})
    googleAccessToken?: string;
    @Field(() => String, {nullable:true})
    googleRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    googleTokenExpiry?: Date | string;
    @Field(() => Boolean, {nullable:true})
    zoomConnected?: boolean;
    @Field(() => String, {nullable:true})
    zoomAccessToken?: string;
    @Field(() => String, {nullable:true})
    zoomRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    zoomTokenExpiry?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    profilePicture?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StoreCreateNestedManyWithoutInfluencerInput, {nullable:true})
    stores?: InstanceType<typeof StoreCreateNestedManyWithoutInfluencerInput>;
    @Field(() => MediaCreateNestedManyWithoutInfluencerInput, {nullable:true})
    media?: InstanceType<typeof MediaCreateNestedManyWithoutInfluencerInput>;
    @Field(() => SessionCreateNestedManyWithoutInfluencerInput, {nullable:true})
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentMethodCreateNestedManyWithoutInfluencerInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentCreateNestedManyWithoutInfluencerInput>;
}

@InputType()
export class InfluencerCreateWithoutMediaInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:false})
    countryCode!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    address!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => String, {nullable:true})
    stripeCustomerId?: string;
    @Field(() => Boolean, {nullable:true})
    googleCalendarConnected?: boolean;
    @Field(() => String, {nullable:true})
    googleAccessToken?: string;
    @Field(() => String, {nullable:true})
    googleRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    googleTokenExpiry?: Date | string;
    @Field(() => Boolean, {nullable:true})
    zoomConnected?: boolean;
    @Field(() => String, {nullable:true})
    zoomAccessToken?: string;
    @Field(() => String, {nullable:true})
    zoomRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    zoomTokenExpiry?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    profilePicture?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StoreCreateNestedManyWithoutInfluencerInput, {nullable:true})
    stores?: InstanceType<typeof StoreCreateNestedManyWithoutInfluencerInput>;
    @Field(() => SessionCreateNestedManyWithoutInfluencerInput, {nullable:true})
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentMethodCreateNestedManyWithoutInfluencerInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerSubscriptionCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionCreateNestedManyWithoutInfluencerInput>;
}

@InputType()
export class InfluencerCreateWithoutPaymentMethodsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:false})
    countryCode!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    address!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => String, {nullable:true})
    stripeCustomerId?: string;
    @Field(() => Boolean, {nullable:true})
    googleCalendarConnected?: boolean;
    @Field(() => String, {nullable:true})
    googleAccessToken?: string;
    @Field(() => String, {nullable:true})
    googleRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    googleTokenExpiry?: Date | string;
    @Field(() => Boolean, {nullable:true})
    zoomConnected?: boolean;
    @Field(() => String, {nullable:true})
    zoomAccessToken?: string;
    @Field(() => String, {nullable:true})
    zoomRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    zoomTokenExpiry?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    profilePicture?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StoreCreateNestedManyWithoutInfluencerInput, {nullable:true})
    stores?: InstanceType<typeof StoreCreateNestedManyWithoutInfluencerInput>;
    @Field(() => MediaCreateNestedManyWithoutInfluencerInput, {nullable:true})
    media?: InstanceType<typeof MediaCreateNestedManyWithoutInfluencerInput>;
    @Field(() => SessionCreateNestedManyWithoutInfluencerInput, {nullable:true})
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerSubscriptionCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionCreateNestedManyWithoutInfluencerInput>;
}

@InputType()
export class InfluencerCreateWithoutSessionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:false})
    countryCode!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    address!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => String, {nullable:true})
    stripeCustomerId?: string;
    @Field(() => Boolean, {nullable:true})
    googleCalendarConnected?: boolean;
    @Field(() => String, {nullable:true})
    googleAccessToken?: string;
    @Field(() => String, {nullable:true})
    googleRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    googleTokenExpiry?: Date | string;
    @Field(() => Boolean, {nullable:true})
    zoomConnected?: boolean;
    @Field(() => String, {nullable:true})
    zoomAccessToken?: string;
    @Field(() => String, {nullable:true})
    zoomRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    zoomTokenExpiry?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    profilePicture?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StoreCreateNestedManyWithoutInfluencerInput, {nullable:true})
    stores?: InstanceType<typeof StoreCreateNestedManyWithoutInfluencerInput>;
    @Field(() => MediaCreateNestedManyWithoutInfluencerInput, {nullable:true})
    media?: InstanceType<typeof MediaCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentMethodCreateNestedManyWithoutInfluencerInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerSubscriptionCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionCreateNestedManyWithoutInfluencerInput>;
}

@InputType()
export class InfluencerCreateWithoutStoresInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:false})
    countryCode!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    address!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => String, {nullable:true})
    stripeCustomerId?: string;
    @Field(() => Boolean, {nullable:true})
    googleCalendarConnected?: boolean;
    @Field(() => String, {nullable:true})
    googleAccessToken?: string;
    @Field(() => String, {nullable:true})
    googleRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    googleTokenExpiry?: Date | string;
    @Field(() => Boolean, {nullable:true})
    zoomConnected?: boolean;
    @Field(() => String, {nullable:true})
    zoomAccessToken?: string;
    @Field(() => String, {nullable:true})
    zoomRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    zoomTokenExpiry?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    profilePicture?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => MediaCreateNestedManyWithoutInfluencerInput, {nullable:true})
    media?: InstanceType<typeof MediaCreateNestedManyWithoutInfluencerInput>;
    @Field(() => SessionCreateNestedManyWithoutInfluencerInput, {nullable:true})
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentMethodCreateNestedManyWithoutInfluencerInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerSubscriptionCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionCreateNestedManyWithoutInfluencerInput>;
}

@InputType()
export class InfluencerCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:false})
    countryCode!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    address!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => String, {nullable:true})
    stripeCustomerId?: string;
    @Field(() => Boolean, {nullable:true})
    googleCalendarConnected?: boolean;
    @Field(() => String, {nullable:true})
    googleAccessToken?: string;
    @Field(() => String, {nullable:true})
    googleRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    googleTokenExpiry?: Date | string;
    @Field(() => Boolean, {nullable:true})
    zoomConnected?: boolean;
    @Field(() => String, {nullable:true})
    zoomAccessToken?: string;
    @Field(() => String, {nullable:true})
    zoomRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    zoomTokenExpiry?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    profilePicture?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StoreCreateNestedManyWithoutInfluencerInput, {nullable:true})
    stores?: InstanceType<typeof StoreCreateNestedManyWithoutInfluencerInput>;
    @Field(() => MediaCreateNestedManyWithoutInfluencerInput, {nullable:true})
    media?: InstanceType<typeof MediaCreateNestedManyWithoutInfluencerInput>;
    @Field(() => SessionCreateNestedManyWithoutInfluencerInput, {nullable:true})
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentMethodCreateNestedManyWithoutInfluencerInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerSubscriptionCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionCreateNestedManyWithoutInfluencerInput>;
}

@ArgsType()
export class InfluencerGroupByArgs {
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => [InfluencerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<InfluencerOrderByWithAggregationInput>;
    @Field(() => [InfluencerScalarFieldEnum], {nullable:false})
    by!: Array<`${InfluencerScalarFieldEnum}`>;
    @Field(() => InfluencerScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof InfluencerScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class InfluencerMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    countryCode?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeOnboardingComplete?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    chargesEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    payoutsEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    detailsSubmitted?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeAccountId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeAccountType?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeCustomerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleCalendarConnected?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleAccessToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleRefreshToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleTokenExpiry?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomConnected?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomAccessToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomRefreshToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomTokenExpiry?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    displayName?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bio?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    profilePicture?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class InfluencerMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    countryCode?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeOnboardingComplete?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    chargesEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    payoutsEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    detailsSubmitted?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeAccountId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeAccountType?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeCustomerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleCalendarConnected?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleAccessToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleRefreshToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleTokenExpiry?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomConnected?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomAccessToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomRefreshToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomTokenExpiry?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    displayName?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bio?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    profilePicture?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class InfluencerNullableScalarRelationFilter {
    @Field(() => InfluencerWhereInput, {nullable:true})
    is?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => InfluencerWhereInput, {nullable:true})
    isNot?: InstanceType<typeof InfluencerWhereInput>;
}

@InputType()
export class InfluencerOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    countryCode?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeOnboardingComplete?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    chargesEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    payoutsEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    detailsSubmitted?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeAccountId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeAccountType?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeCustomerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleCalendarConnected?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleAccessToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleRefreshToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleTokenExpiry?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomConnected?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomAccessToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomRefreshToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomTokenExpiry?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    displayName?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bio?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    profilePicture?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => InfluencerCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof InfluencerCountOrderByAggregateInput>;
    @Field(() => InfluencerMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof InfluencerMaxOrderByAggregateInput>;
    @Field(() => InfluencerMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof InfluencerMinOrderByAggregateInput>;
}

@InputType()
export class InfluencerOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    countryCode?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: `${SortOrder}`;
    @Field(() => AddressOrderByInput, {nullable:true})
    address?: InstanceType<typeof AddressOrderByInput>;
    @Field(() => SocialLinkOrderByCompositeAggregateInput, {nullable:true})
    socialLinks?: InstanceType<typeof SocialLinkOrderByCompositeAggregateInput>;
    @Field(() => SortOrder, {nullable:true})
    stripeOnboardingComplete?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    chargesEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    payoutsEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    detailsSubmitted?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeAccountId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeAccountType?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeCustomerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleCalendarConnected?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleAccessToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleRefreshToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    googleTokenExpiry?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomConnected?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomAccessToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomRefreshToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    zoomTokenExpiry?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    displayName?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bio?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    profilePicture?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => StoreOrderByRelationAggregateInput, {nullable:true})
    stores?: InstanceType<typeof StoreOrderByRelationAggregateInput>;
    @Field(() => MediaOrderByRelationAggregateInput, {nullable:true})
    media?: InstanceType<typeof MediaOrderByRelationAggregateInput>;
    @Field(() => SessionOrderByRelationAggregateInput, {nullable:true})
    sessions?: InstanceType<typeof SessionOrderByRelationAggregateInput>;
    @Field(() => InfluencerPaymentMethodOrderByRelationAggregateInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodOrderByRelationAggregateInput>;
    @Field(() => InfluencerPaymentOrderByRelationAggregateInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentOrderByRelationAggregateInput>;
    @Field(() => InfluencerSubscriptionOrderByRelationAggregateInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionOrderByRelationAggregateInput>;
}

@InputType()
export class InfluencerScalarRelationFilter {
    @Field(() => InfluencerWhereInput, {nullable:true})
    is?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => InfluencerWhereInput, {nullable:true})
    isNot?: InstanceType<typeof InfluencerWhereInput>;
}

@InputType()
export class InfluencerScalarWhereWithAggregatesInput {
    @Field(() => [InfluencerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<InfluencerScalarWhereWithAggregatesInput>;
    @Field(() => [InfluencerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<InfluencerScalarWhereWithAggregatesInput>;
    @Field(() => [InfluencerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<InfluencerScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    username?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumRoleWithAggregatesFilter, {nullable:true})
    role?: InstanceType<typeof EnumRoleWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    countryCode?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phoneNumber?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    stripeAccountId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    stripeAccountType?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    stripeCustomerId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    googleAccessToken?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    googleRefreshToken?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    zoomAccessToken?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    displayName?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    bio?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    profilePicture?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class InfluencerUncheckedCreateWithoutInfluencerPaymentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:false})
    countryCode!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    address!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => String, {nullable:true})
    stripeCustomerId?: string;
    @Field(() => Boolean, {nullable:true})
    googleCalendarConnected?: boolean;
    @Field(() => String, {nullable:true})
    googleAccessToken?: string;
    @Field(() => String, {nullable:true})
    googleRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    googleTokenExpiry?: Date | string;
    @Field(() => Boolean, {nullable:true})
    zoomConnected?: boolean;
    @Field(() => String, {nullable:true})
    zoomAccessToken?: string;
    @Field(() => String, {nullable:true})
    zoomRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    zoomTokenExpiry?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    profilePicture?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StoreUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    stores?: InstanceType<typeof StoreUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => MediaUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    media?: InstanceType<typeof MediaUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => SessionUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentMethodUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerSubscriptionUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUncheckedCreateNestedManyWithoutInfluencerInput>;
}

@InputType()
export class InfluencerUncheckedCreateWithoutInfluencerSubscriptionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:false})
    countryCode!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    address!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => String, {nullable:true})
    stripeCustomerId?: string;
    @Field(() => Boolean, {nullable:true})
    googleCalendarConnected?: boolean;
    @Field(() => String, {nullable:true})
    googleAccessToken?: string;
    @Field(() => String, {nullable:true})
    googleRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    googleTokenExpiry?: Date | string;
    @Field(() => Boolean, {nullable:true})
    zoomConnected?: boolean;
    @Field(() => String, {nullable:true})
    zoomAccessToken?: string;
    @Field(() => String, {nullable:true})
    zoomRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    zoomTokenExpiry?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    profilePicture?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StoreUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    stores?: InstanceType<typeof StoreUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => MediaUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    media?: InstanceType<typeof MediaUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => SessionUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentMethodUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedCreateNestedManyWithoutInfluencerInput>;
}

@InputType()
export class InfluencerUncheckedCreateWithoutMediaInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:false})
    countryCode!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    address!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => String, {nullable:true})
    stripeCustomerId?: string;
    @Field(() => Boolean, {nullable:true})
    googleCalendarConnected?: boolean;
    @Field(() => String, {nullable:true})
    googleAccessToken?: string;
    @Field(() => String, {nullable:true})
    googleRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    googleTokenExpiry?: Date | string;
    @Field(() => Boolean, {nullable:true})
    zoomConnected?: boolean;
    @Field(() => String, {nullable:true})
    zoomAccessToken?: string;
    @Field(() => String, {nullable:true})
    zoomRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    zoomTokenExpiry?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    profilePicture?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StoreUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    stores?: InstanceType<typeof StoreUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => SessionUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentMethodUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerSubscriptionUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUncheckedCreateNestedManyWithoutInfluencerInput>;
}

@InputType()
export class InfluencerUncheckedCreateWithoutPaymentMethodsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:false})
    countryCode!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    address!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => String, {nullable:true})
    stripeCustomerId?: string;
    @Field(() => Boolean, {nullable:true})
    googleCalendarConnected?: boolean;
    @Field(() => String, {nullable:true})
    googleAccessToken?: string;
    @Field(() => String, {nullable:true})
    googleRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    googleTokenExpiry?: Date | string;
    @Field(() => Boolean, {nullable:true})
    zoomConnected?: boolean;
    @Field(() => String, {nullable:true})
    zoomAccessToken?: string;
    @Field(() => String, {nullable:true})
    zoomRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    zoomTokenExpiry?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    profilePicture?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StoreUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    stores?: InstanceType<typeof StoreUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => MediaUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    media?: InstanceType<typeof MediaUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => SessionUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerSubscriptionUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUncheckedCreateNestedManyWithoutInfluencerInput>;
}

@InputType()
export class InfluencerUncheckedCreateWithoutSessionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:false})
    countryCode!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    address!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => String, {nullable:true})
    stripeCustomerId?: string;
    @Field(() => Boolean, {nullable:true})
    googleCalendarConnected?: boolean;
    @Field(() => String, {nullable:true})
    googleAccessToken?: string;
    @Field(() => String, {nullable:true})
    googleRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    googleTokenExpiry?: Date | string;
    @Field(() => Boolean, {nullable:true})
    zoomConnected?: boolean;
    @Field(() => String, {nullable:true})
    zoomAccessToken?: string;
    @Field(() => String, {nullable:true})
    zoomRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    zoomTokenExpiry?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    profilePicture?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StoreUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    stores?: InstanceType<typeof StoreUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => MediaUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    media?: InstanceType<typeof MediaUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentMethodUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerSubscriptionUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUncheckedCreateNestedManyWithoutInfluencerInput>;
}

@InputType()
export class InfluencerUncheckedCreateWithoutStoresInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:false})
    countryCode!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    address!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => String, {nullable:true})
    stripeCustomerId?: string;
    @Field(() => Boolean, {nullable:true})
    googleCalendarConnected?: boolean;
    @Field(() => String, {nullable:true})
    googleAccessToken?: string;
    @Field(() => String, {nullable:true})
    googleRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    googleTokenExpiry?: Date | string;
    @Field(() => Boolean, {nullable:true})
    zoomConnected?: boolean;
    @Field(() => String, {nullable:true})
    zoomAccessToken?: string;
    @Field(() => String, {nullable:true})
    zoomRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    zoomTokenExpiry?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    profilePicture?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => MediaUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    media?: InstanceType<typeof MediaUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => SessionUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentMethodUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerSubscriptionUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUncheckedCreateNestedManyWithoutInfluencerInput>;
}

@InputType()
export class InfluencerUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: `${Role}`;
    @Field(() => String, {nullable:false})
    countryCode!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    address!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => String, {nullable:true})
    stripeCustomerId?: string;
    @Field(() => Boolean, {nullable:true})
    googleCalendarConnected?: boolean;
    @Field(() => String, {nullable:true})
    googleAccessToken?: string;
    @Field(() => String, {nullable:true})
    googleRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    googleTokenExpiry?: Date | string;
    @Field(() => Boolean, {nullable:true})
    zoomConnected?: boolean;
    @Field(() => String, {nullable:true})
    zoomAccessToken?: string;
    @Field(() => String, {nullable:true})
    zoomRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    zoomTokenExpiry?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => String, {nullable:true})
    profilePicture?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StoreUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    stores?: InstanceType<typeof StoreUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => MediaUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    media?: InstanceType<typeof MediaUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => SessionUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentMethodUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedCreateNestedManyWithoutInfluencerInput>;
    @Field(() => InfluencerSubscriptionUncheckedCreateNestedManyWithoutInfluencerInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUncheckedCreateNestedManyWithoutInfluencerInput>;
}

@InputType()
export class InfluencerUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    address?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeCustomerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    displayName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerUncheckedUpdateWithoutInfluencerPaymentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    address?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeCustomerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    displayName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StoreUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    stores?: InstanceType<typeof StoreUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => MediaUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    media?: InstanceType<typeof MediaUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => SessionUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentMethodUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerSubscriptionUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUncheckedUpdateManyWithoutInfluencerNestedInput>;
}

@InputType()
export class InfluencerUncheckedUpdateWithoutInfluencerSubscriptionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    address?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeCustomerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    displayName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StoreUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    stores?: InstanceType<typeof StoreUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => MediaUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    media?: InstanceType<typeof MediaUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => SessionUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentMethodUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedUpdateManyWithoutInfluencerNestedInput>;
}

@InputType()
export class InfluencerUncheckedUpdateWithoutMediaInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    address?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeCustomerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    displayName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StoreUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    stores?: InstanceType<typeof StoreUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => SessionUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentMethodUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerSubscriptionUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUncheckedUpdateManyWithoutInfluencerNestedInput>;
}

@InputType()
export class InfluencerUncheckedUpdateWithoutPaymentMethodsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    address?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeCustomerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    displayName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StoreUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    stores?: InstanceType<typeof StoreUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => MediaUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    media?: InstanceType<typeof MediaUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => SessionUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerSubscriptionUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUncheckedUpdateManyWithoutInfluencerNestedInput>;
}

@InputType()
export class InfluencerUncheckedUpdateWithoutSessionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    address?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeCustomerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    displayName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StoreUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    stores?: InstanceType<typeof StoreUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => MediaUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    media?: InstanceType<typeof MediaUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentMethodUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerSubscriptionUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUncheckedUpdateManyWithoutInfluencerNestedInput>;
}

@InputType()
export class InfluencerUncheckedUpdateWithoutStoresInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    address?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeCustomerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    displayName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => MediaUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    media?: InstanceType<typeof MediaUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => SessionUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentMethodUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerSubscriptionUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUncheckedUpdateManyWithoutInfluencerNestedInput>;
}

@InputType()
export class InfluencerUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    address?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeCustomerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    displayName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StoreUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    stores?: InstanceType<typeof StoreUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => MediaUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    media?: InstanceType<typeof MediaUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => SessionUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentMethodUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerSubscriptionUncheckedUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUncheckedUpdateManyWithoutInfluencerNestedInput>;
}

@InputType()
export class InfluencerUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    address?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeCustomerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    displayName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerUpdateOneRequiredWithoutInfluencerPaymentsNestedInput {
    @Field(() => InfluencerCreateWithoutInfluencerPaymentsInput, {nullable:true})
    @Type(() => InfluencerCreateWithoutInfluencerPaymentsInput)
    create?: InstanceType<typeof InfluencerCreateWithoutInfluencerPaymentsInput>;
    @Field(() => InfluencerCreateOrConnectWithoutInfluencerPaymentsInput, {nullable:true})
    @Type(() => InfluencerCreateOrConnectWithoutInfluencerPaymentsInput)
    connectOrCreate?: InstanceType<typeof InfluencerCreateOrConnectWithoutInfluencerPaymentsInput>;
    @Field(() => InfluencerUpsertWithoutInfluencerPaymentsInput, {nullable:true})
    @Type(() => InfluencerUpsertWithoutInfluencerPaymentsInput)
    upsert?: InstanceType<typeof InfluencerUpsertWithoutInfluencerPaymentsInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    @Type(() => InfluencerWhereUniqueInput)
    connect?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
    @Field(() => InfluencerUpdateToOneWithWhereWithoutInfluencerPaymentsInput, {nullable:true})
    @Type(() => InfluencerUpdateToOneWithWhereWithoutInfluencerPaymentsInput)
    update?: InstanceType<typeof InfluencerUpdateToOneWithWhereWithoutInfluencerPaymentsInput>;
}

@InputType()
export class InfluencerUpdateOneRequiredWithoutInfluencerSubscriptionsNestedInput {
    @Field(() => InfluencerCreateWithoutInfluencerSubscriptionsInput, {nullable:true})
    @Type(() => InfluencerCreateWithoutInfluencerSubscriptionsInput)
    create?: InstanceType<typeof InfluencerCreateWithoutInfluencerSubscriptionsInput>;
    @Field(() => InfluencerCreateOrConnectWithoutInfluencerSubscriptionsInput, {nullable:true})
    @Type(() => InfluencerCreateOrConnectWithoutInfluencerSubscriptionsInput)
    connectOrCreate?: InstanceType<typeof InfluencerCreateOrConnectWithoutInfluencerSubscriptionsInput>;
    @Field(() => InfluencerUpsertWithoutInfluencerSubscriptionsInput, {nullable:true})
    @Type(() => InfluencerUpsertWithoutInfluencerSubscriptionsInput)
    upsert?: InstanceType<typeof InfluencerUpsertWithoutInfluencerSubscriptionsInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    @Type(() => InfluencerWhereUniqueInput)
    connect?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
    @Field(() => InfluencerUpdateToOneWithWhereWithoutInfluencerSubscriptionsInput, {nullable:true})
    @Type(() => InfluencerUpdateToOneWithWhereWithoutInfluencerSubscriptionsInput)
    update?: InstanceType<typeof InfluencerUpdateToOneWithWhereWithoutInfluencerSubscriptionsInput>;
}

@InputType()
export class InfluencerUpdateOneRequiredWithoutMediaNestedInput {
    @Field(() => InfluencerCreateWithoutMediaInput, {nullable:true})
    @Type(() => InfluencerCreateWithoutMediaInput)
    create?: InstanceType<typeof InfluencerCreateWithoutMediaInput>;
    @Field(() => InfluencerCreateOrConnectWithoutMediaInput, {nullable:true})
    @Type(() => InfluencerCreateOrConnectWithoutMediaInput)
    connectOrCreate?: InstanceType<typeof InfluencerCreateOrConnectWithoutMediaInput>;
    @Field(() => InfluencerUpsertWithoutMediaInput, {nullable:true})
    @Type(() => InfluencerUpsertWithoutMediaInput)
    upsert?: InstanceType<typeof InfluencerUpsertWithoutMediaInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    @Type(() => InfluencerWhereUniqueInput)
    connect?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
    @Field(() => InfluencerUpdateToOneWithWhereWithoutMediaInput, {nullable:true})
    @Type(() => InfluencerUpdateToOneWithWhereWithoutMediaInput)
    update?: InstanceType<typeof InfluencerUpdateToOneWithWhereWithoutMediaInput>;
}

@InputType()
export class InfluencerUpdateOneRequiredWithoutPaymentMethodsNestedInput {
    @Field(() => InfluencerCreateWithoutPaymentMethodsInput, {nullable:true})
    @Type(() => InfluencerCreateWithoutPaymentMethodsInput)
    create?: InstanceType<typeof InfluencerCreateWithoutPaymentMethodsInput>;
    @Field(() => InfluencerCreateOrConnectWithoutPaymentMethodsInput, {nullable:true})
    @Type(() => InfluencerCreateOrConnectWithoutPaymentMethodsInput)
    connectOrCreate?: InstanceType<typeof InfluencerCreateOrConnectWithoutPaymentMethodsInput>;
    @Field(() => InfluencerUpsertWithoutPaymentMethodsInput, {nullable:true})
    @Type(() => InfluencerUpsertWithoutPaymentMethodsInput)
    upsert?: InstanceType<typeof InfluencerUpsertWithoutPaymentMethodsInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    @Type(() => InfluencerWhereUniqueInput)
    connect?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
    @Field(() => InfluencerUpdateToOneWithWhereWithoutPaymentMethodsInput, {nullable:true})
    @Type(() => InfluencerUpdateToOneWithWhereWithoutPaymentMethodsInput)
    update?: InstanceType<typeof InfluencerUpdateToOneWithWhereWithoutPaymentMethodsInput>;
}

@InputType()
export class InfluencerUpdateOneRequiredWithoutStoresNestedInput {
    @Field(() => InfluencerCreateWithoutStoresInput, {nullable:true})
    @Type(() => InfluencerCreateWithoutStoresInput)
    create?: InstanceType<typeof InfluencerCreateWithoutStoresInput>;
    @Field(() => InfluencerCreateOrConnectWithoutStoresInput, {nullable:true})
    @Type(() => InfluencerCreateOrConnectWithoutStoresInput)
    connectOrCreate?: InstanceType<typeof InfluencerCreateOrConnectWithoutStoresInput>;
    @Field(() => InfluencerUpsertWithoutStoresInput, {nullable:true})
    @Type(() => InfluencerUpsertWithoutStoresInput)
    upsert?: InstanceType<typeof InfluencerUpsertWithoutStoresInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    @Type(() => InfluencerWhereUniqueInput)
    connect?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
    @Field(() => InfluencerUpdateToOneWithWhereWithoutStoresInput, {nullable:true})
    @Type(() => InfluencerUpdateToOneWithWhereWithoutStoresInput)
    update?: InstanceType<typeof InfluencerUpdateToOneWithWhereWithoutStoresInput>;
}

@InputType()
export class InfluencerUpdateOneWithoutSessionsNestedInput {
    @Field(() => InfluencerCreateWithoutSessionsInput, {nullable:true})
    @Type(() => InfluencerCreateWithoutSessionsInput)
    create?: InstanceType<typeof InfluencerCreateWithoutSessionsInput>;
    @Field(() => InfluencerCreateOrConnectWithoutSessionsInput, {nullable:true})
    @Type(() => InfluencerCreateOrConnectWithoutSessionsInput)
    connectOrCreate?: InstanceType<typeof InfluencerCreateOrConnectWithoutSessionsInput>;
    @Field(() => InfluencerUpsertWithoutSessionsInput, {nullable:true})
    @Type(() => InfluencerUpsertWithoutSessionsInput)
    upsert?: InstanceType<typeof InfluencerUpsertWithoutSessionsInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    delete?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    @Type(() => InfluencerWhereUniqueInput)
    connect?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
    @Field(() => InfluencerUpdateToOneWithWhereWithoutSessionsInput, {nullable:true})
    @Type(() => InfluencerUpdateToOneWithWhereWithoutSessionsInput)
    update?: InstanceType<typeof InfluencerUpdateToOneWithWhereWithoutSessionsInput>;
}

@InputType()
export class InfluencerUpdateToOneWithWhereWithoutInfluencerPaymentsInput {
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => InfluencerUpdateWithoutInfluencerPaymentsInput, {nullable:false})
    @Type(() => InfluencerUpdateWithoutInfluencerPaymentsInput)
    data!: InstanceType<typeof InfluencerUpdateWithoutInfluencerPaymentsInput>;
}

@InputType()
export class InfluencerUpdateToOneWithWhereWithoutInfluencerSubscriptionsInput {
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => InfluencerUpdateWithoutInfluencerSubscriptionsInput, {nullable:false})
    @Type(() => InfluencerUpdateWithoutInfluencerSubscriptionsInput)
    data!: InstanceType<typeof InfluencerUpdateWithoutInfluencerSubscriptionsInput>;
}

@InputType()
export class InfluencerUpdateToOneWithWhereWithoutMediaInput {
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => InfluencerUpdateWithoutMediaInput, {nullable:false})
    @Type(() => InfluencerUpdateWithoutMediaInput)
    data!: InstanceType<typeof InfluencerUpdateWithoutMediaInput>;
}

@InputType()
export class InfluencerUpdateToOneWithWhereWithoutPaymentMethodsInput {
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => InfluencerUpdateWithoutPaymentMethodsInput, {nullable:false})
    @Type(() => InfluencerUpdateWithoutPaymentMethodsInput)
    data!: InstanceType<typeof InfluencerUpdateWithoutPaymentMethodsInput>;
}

@InputType()
export class InfluencerUpdateToOneWithWhereWithoutSessionsInput {
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => InfluencerUpdateWithoutSessionsInput, {nullable:false})
    @Type(() => InfluencerUpdateWithoutSessionsInput)
    data!: InstanceType<typeof InfluencerUpdateWithoutSessionsInput>;
}

@InputType()
export class InfluencerUpdateToOneWithWhereWithoutStoresInput {
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => InfluencerUpdateWithoutStoresInput, {nullable:false})
    @Type(() => InfluencerUpdateWithoutStoresInput)
    data!: InstanceType<typeof InfluencerUpdateWithoutStoresInput>;
}

@InputType()
export class InfluencerUpdateWithoutInfluencerPaymentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    address?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeCustomerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    displayName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StoreUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    stores?: InstanceType<typeof StoreUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => MediaUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    media?: InstanceType<typeof MediaUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => SessionUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentMethodUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerSubscriptionUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUpdateManyWithoutInfluencerNestedInput>;
}

@InputType()
export class InfluencerUpdateWithoutInfluencerSubscriptionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    address?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeCustomerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    displayName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StoreUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    stores?: InstanceType<typeof StoreUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => MediaUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    media?: InstanceType<typeof MediaUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => SessionUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentMethodUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUpdateManyWithoutInfluencerNestedInput>;
}

@InputType()
export class InfluencerUpdateWithoutMediaInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    address?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeCustomerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    displayName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StoreUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    stores?: InstanceType<typeof StoreUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => SessionUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentMethodUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerSubscriptionUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUpdateManyWithoutInfluencerNestedInput>;
}

@InputType()
export class InfluencerUpdateWithoutPaymentMethodsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    address?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeCustomerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    displayName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StoreUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    stores?: InstanceType<typeof StoreUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => MediaUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    media?: InstanceType<typeof MediaUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => SessionUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerSubscriptionUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUpdateManyWithoutInfluencerNestedInput>;
}

@InputType()
export class InfluencerUpdateWithoutSessionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    address?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeCustomerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    displayName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StoreUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    stores?: InstanceType<typeof StoreUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => MediaUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    media?: InstanceType<typeof MediaUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentMethodUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerSubscriptionUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUpdateManyWithoutInfluencerNestedInput>;
}

@InputType()
export class InfluencerUpdateWithoutStoresInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    address?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeCustomerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    displayName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => MediaUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    media?: InstanceType<typeof MediaUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => SessionUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentMethodUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerSubscriptionUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUpdateManyWithoutInfluencerNestedInput>;
}

@InputType()
export class InfluencerUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    address?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    socialLinks?: Array<SocialLinkCreateInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeCustomerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomAccessToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    displayName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StoreUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    stores?: InstanceType<typeof StoreUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => MediaUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    media?: InstanceType<typeof MediaUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => SessionUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    sessions?: InstanceType<typeof SessionUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentMethodUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerPaymentUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUpdateManyWithoutInfluencerNestedInput>;
    @Field(() => InfluencerSubscriptionUpdateManyWithoutInfluencerNestedInput, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionUpdateManyWithoutInfluencerNestedInput>;
}

@InputType()
export class InfluencerUpsertWithoutInfluencerPaymentsInput {
    @Field(() => InfluencerUpdateWithoutInfluencerPaymentsInput, {nullable:false})
    @Type(() => InfluencerUpdateWithoutInfluencerPaymentsInput)
    update!: InstanceType<typeof InfluencerUpdateWithoutInfluencerPaymentsInput>;
    @Field(() => InfluencerCreateWithoutInfluencerPaymentsInput, {nullable:false})
    @Type(() => InfluencerCreateWithoutInfluencerPaymentsInput)
    create!: InstanceType<typeof InfluencerCreateWithoutInfluencerPaymentsInput>;
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
}

@InputType()
export class InfluencerUpsertWithoutInfluencerSubscriptionsInput {
    @Field(() => InfluencerUpdateWithoutInfluencerSubscriptionsInput, {nullable:false})
    @Type(() => InfluencerUpdateWithoutInfluencerSubscriptionsInput)
    update!: InstanceType<typeof InfluencerUpdateWithoutInfluencerSubscriptionsInput>;
    @Field(() => InfluencerCreateWithoutInfluencerSubscriptionsInput, {nullable:false})
    @Type(() => InfluencerCreateWithoutInfluencerSubscriptionsInput)
    create!: InstanceType<typeof InfluencerCreateWithoutInfluencerSubscriptionsInput>;
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
}

@InputType()
export class InfluencerUpsertWithoutMediaInput {
    @Field(() => InfluencerUpdateWithoutMediaInput, {nullable:false})
    @Type(() => InfluencerUpdateWithoutMediaInput)
    update!: InstanceType<typeof InfluencerUpdateWithoutMediaInput>;
    @Field(() => InfluencerCreateWithoutMediaInput, {nullable:false})
    @Type(() => InfluencerCreateWithoutMediaInput)
    create!: InstanceType<typeof InfluencerCreateWithoutMediaInput>;
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
}

@InputType()
export class InfluencerUpsertWithoutPaymentMethodsInput {
    @Field(() => InfluencerUpdateWithoutPaymentMethodsInput, {nullable:false})
    @Type(() => InfluencerUpdateWithoutPaymentMethodsInput)
    update!: InstanceType<typeof InfluencerUpdateWithoutPaymentMethodsInput>;
    @Field(() => InfluencerCreateWithoutPaymentMethodsInput, {nullable:false})
    @Type(() => InfluencerCreateWithoutPaymentMethodsInput)
    create!: InstanceType<typeof InfluencerCreateWithoutPaymentMethodsInput>;
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
}

@InputType()
export class InfluencerUpsertWithoutSessionsInput {
    @Field(() => InfluencerUpdateWithoutSessionsInput, {nullable:false})
    @Type(() => InfluencerUpdateWithoutSessionsInput)
    update!: InstanceType<typeof InfluencerUpdateWithoutSessionsInput>;
    @Field(() => InfluencerCreateWithoutSessionsInput, {nullable:false})
    @Type(() => InfluencerCreateWithoutSessionsInput)
    create!: InstanceType<typeof InfluencerCreateWithoutSessionsInput>;
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
}

@InputType()
export class InfluencerUpsertWithoutStoresInput {
    @Field(() => InfluencerUpdateWithoutStoresInput, {nullable:false})
    @Type(() => InfluencerUpdateWithoutStoresInput)
    update!: InstanceType<typeof InfluencerUpdateWithoutStoresInput>;
    @Field(() => InfluencerCreateWithoutStoresInput, {nullable:false})
    @Type(() => InfluencerCreateWithoutStoresInput)
    create!: InstanceType<typeof InfluencerCreateWithoutStoresInput>;
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
}

@InputType()
export class InfluencerWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => String, {nullable:true})
    stripeCustomerId?: string;
    @Field(() => [InfluencerWhereInput], {nullable:true})
    AND?: Array<InfluencerWhereInput>;
    @Field(() => [InfluencerWhereInput], {nullable:true})
    OR?: Array<InfluencerWhereInput>;
    @Field(() => [InfluencerWhereInput], {nullable:true})
    NOT?: Array<InfluencerWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => EnumRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumRoleFilter>;
    @Field(() => StringFilter, {nullable:true})
    countryCode?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFilter>;
    @Field(() => AddressCompositeFilter, {nullable:true})
    address?: InstanceType<typeof AddressCompositeFilter>;
    @Field(() => [SocialLinkObjectEqualityInput], {nullable:true})
    socialLinks?: Array<SocialLinkObjectEqualityInput>;
    @Field(() => BoolFilter, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    stripeAccountType?: InstanceType<typeof StringNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    googleAccessToken?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    googleRefreshToken?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    zoomAccessToken?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    displayName?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    bio?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    profilePicture?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StoreListRelationFilter, {nullable:true})
    stores?: InstanceType<typeof StoreListRelationFilter>;
    @Field(() => MediaListRelationFilter, {nullable:true})
    media?: InstanceType<typeof MediaListRelationFilter>;
    @Field(() => SessionListRelationFilter, {nullable:true})
    sessions?: InstanceType<typeof SessionListRelationFilter>;
    @Field(() => InfluencerPaymentMethodListRelationFilter, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodListRelationFilter>;
    @Field(() => InfluencerPaymentListRelationFilter, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentListRelationFilter>;
    @Field(() => InfluencerSubscriptionListRelationFilter, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionListRelationFilter>;
}

@InputType()
export class InfluencerWhereInput {
    @Field(() => [InfluencerWhereInput], {nullable:true})
    AND?: Array<InfluencerWhereInput>;
    @Field(() => [InfluencerWhereInput], {nullable:true})
    OR?: Array<InfluencerWhereInput>;
    @Field(() => [InfluencerWhereInput], {nullable:true})
    NOT?: Array<InfluencerWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    username?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => EnumRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumRoleFilter>;
    @Field(() => StringFilter, {nullable:true})
    countryCode?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFilter>;
    @Field(() => AddressCompositeFilter, {nullable:true})
    address?: InstanceType<typeof AddressCompositeFilter>;
    @Field(() => [SocialLinkObjectEqualityInput], {nullable:true})
    socialLinks?: Array<SocialLinkObjectEqualityInput>;
    @Field(() => BoolFilter, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    stripeAccountId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    stripeAccountType?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    stripeCustomerId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    googleCalendarConnected?: InstanceType<typeof BoolFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    googleAccessToken?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    googleRefreshToken?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    googleTokenExpiry?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    zoomConnected?: InstanceType<typeof BoolFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    zoomAccessToken?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    zoomRefreshToken?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    zoomTokenExpiry?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    displayName?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    bio?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    profilePicture?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StoreListRelationFilter, {nullable:true})
    stores?: InstanceType<typeof StoreListRelationFilter>;
    @Field(() => MediaListRelationFilter, {nullable:true})
    media?: InstanceType<typeof MediaListRelationFilter>;
    @Field(() => SessionListRelationFilter, {nullable:true})
    sessions?: InstanceType<typeof SessionListRelationFilter>;
    @Field(() => InfluencerPaymentMethodListRelationFilter, {nullable:true})
    paymentMethods?: InstanceType<typeof InfluencerPaymentMethodListRelationFilter>;
    @Field(() => InfluencerPaymentListRelationFilter, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentListRelationFilter>;
    @Field(() => InfluencerSubscriptionListRelationFilter, {nullable:true})
    influencerSubscriptions?: InstanceType<typeof InfluencerSubscriptionListRelationFilter>;
}

@ObjectType()
export class Influencer {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Role, {defaultValue:'INFLUENCER',nullable:false})
    role!: `${Role}`;
    @Field(() => String, {nullable:false})
    countryCode!: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Address, {nullable:false})
    address?: InstanceType<typeof Address>;
    @Field(() => [SocialLink], {nullable:true})
    socialLinks?: Array<SocialLink>;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    stripeOnboardingComplete!: boolean;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    chargesEnabled!: boolean;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    payoutsEnabled!: boolean;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    detailsSubmitted!: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountId!: string | null;
    @Field(() => String, {nullable:true})
    stripeAccountType!: string | null;
    @Field(() => String, {nullable:true})
    stripeCustomerId!: string | null;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    googleCalendarConnected!: boolean;
    @Field(() => String, {nullable:true})
    googleAccessToken!: string | null;
    @Field(() => String, {nullable:true})
    googleRefreshToken!: string | null;
    @Field(() => Date, {nullable:true})
    googleTokenExpiry!: Date | null;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    zoomConnected!: boolean;
    @Field(() => String, {nullable:true})
    zoomAccessToken!: string | null;
    @Field(() => String, {nullable:true})
    zoomRefreshToken!: string | null;
    @Field(() => Date, {nullable:true})
    zoomTokenExpiry!: Date | null;
    @Field(() => String, {nullable:true})
    displayName!: string | null;
    @Field(() => String, {nullable:true})
    bio!: string | null;
    @Field(() => String, {nullable:true})
    profilePicture!: string | null;
    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [Store], {nullable:true})
    stores?: Array<Store>;
    @Field(() => [Media], {nullable:true})
    media?: Array<Media>;
    @Field(() => [Session], {nullable:true})
    sessions?: Array<Session>;
    @Field(() => [InfluencerPaymentMethod], {nullable:true})
    paymentMethods?: Array<InfluencerPaymentMethod>;
    @Field(() => [InfluencerPayment], {nullable:true})
    influencerPayments?: Array<InfluencerPayment>;
    @Field(() => [InfluencerSubscription], {nullable:true})
    influencerSubscriptions?: Array<InfluencerSubscription>;
}

@ArgsType()
export class UpdateManyInfluencerArgs {
    @Field(() => InfluencerUpdateManyMutationInput, {nullable:false})
    @Type(() => InfluencerUpdateManyMutationInput)
    data!: InstanceType<typeof InfluencerUpdateManyMutationInput>;
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneInfluencerArgs {
    @Field(() => InfluencerUpdateInput, {nullable:false})
    @Type(() => InfluencerUpdateInput)
    data!: InstanceType<typeof InfluencerUpdateInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
}

@ArgsType()
export class UpsertOneInfluencerArgs {
    @Field(() => InfluencerWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId' | 'stripeCustomerId'>;
    @Field(() => InfluencerCreateInput, {nullable:false})
    @Type(() => InfluencerCreateInput)
    create!: InstanceType<typeof InfluencerCreateInput>;
    @Field(() => InfluencerUpdateInput, {nullable:false})
    @Type(() => InfluencerUpdateInput)
    update!: InstanceType<typeof InfluencerUpdateInput>;
}

@ArgsType()
export class CreateManyInfluencerPaymentArgs {
    @Field(() => [InfluencerPaymentCreateManyInput], {nullable:false})
    @Type(() => InfluencerPaymentCreateManyInput)
    data!: Array<InfluencerPaymentCreateManyInput>;
}

@ArgsType()
export class CreateOneInfluencerPaymentArgs {
    @Field(() => InfluencerPaymentCreateInput, {nullable:false})
    @Type(() => InfluencerPaymentCreateInput)
    data!: InstanceType<typeof InfluencerPaymentCreateInput>;
}

@ArgsType()
export class DeleteManyInfluencerPaymentArgs {
    @Field(() => InfluencerPaymentWhereInput, {nullable:true})
    @Type(() => InfluencerPaymentWhereInput)
    where?: InstanceType<typeof InfluencerPaymentWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneInfluencerPaymentArgs {
    @Field(() => InfluencerPaymentWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>;
}

@ArgsType()
export class FindFirstInfluencerPaymentOrThrowArgs {
    @Field(() => InfluencerPaymentWhereInput, {nullable:true})
    @Type(() => InfluencerPaymentWhereInput)
    where?: InstanceType<typeof InfluencerPaymentWhereInput>;
    @Field(() => [InfluencerPaymentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerPaymentOrderByWithRelationInput>;
    @Field(() => InfluencerPaymentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [InfluencerPaymentScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InfluencerPaymentScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstInfluencerPaymentArgs {
    @Field(() => InfluencerPaymentWhereInput, {nullable:true})
    @Type(() => InfluencerPaymentWhereInput)
    where?: InstanceType<typeof InfluencerPaymentWhereInput>;
    @Field(() => [InfluencerPaymentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerPaymentOrderByWithRelationInput>;
    @Field(() => InfluencerPaymentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [InfluencerPaymentScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InfluencerPaymentScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyInfluencerPaymentArgs {
    @Field(() => InfluencerPaymentWhereInput, {nullable:true})
    @Type(() => InfluencerPaymentWhereInput)
    where?: InstanceType<typeof InfluencerPaymentWhereInput>;
    @Field(() => [InfluencerPaymentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerPaymentOrderByWithRelationInput>;
    @Field(() => InfluencerPaymentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [InfluencerPaymentScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InfluencerPaymentScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueInfluencerPaymentOrThrowArgs {
    @Field(() => InfluencerPaymentWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>;
}

@ArgsType()
export class FindUniqueInfluencerPaymentArgs {
    @Field(() => InfluencerPaymentWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>;
}

@ArgsType()
export class InfluencerPaymentAggregateArgs {
    @Field(() => InfluencerPaymentWhereInput, {nullable:true})
    @Type(() => InfluencerPaymentWhereInput)
    where?: InstanceType<typeof InfluencerPaymentWhereInput>;
    @Field(() => [InfluencerPaymentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerPaymentOrderByWithRelationInput>;
    @Field(() => InfluencerPaymentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class InfluencerPaymentAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    amountInLowestDenomination?: `${SortOrder}`;
}

@InputType()
export class InfluencerPaymentCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    subscriptionId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    amountInLowestDenomination?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currency?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripePaymentIntentId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeChargeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeRefundId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class InfluencerPaymentCreateManyInfluencerInputEnvelope {
    @Field(() => [InfluencerPaymentCreateManyInfluencerInput], {nullable:false})
    @Type(() => InfluencerPaymentCreateManyInfluencerInput)
    data!: Array<InfluencerPaymentCreateManyInfluencerInput>;
}

@InputType()
export class InfluencerPaymentCreateManyInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    subscriptionId?: string;
    @Field(() => Int, {nullable:false})
    amountInLowestDenomination!: number;
    @Field(() => Currency, {nullable:false})
    currency!: `${Currency}`;
    @Field(() => String, {nullable:true})
    stripePaymentIntentId?: string;
    @Field(() => String, {nullable:true})
    stripeChargeId?: string;
    @Field(() => String, {nullable:true})
    stripeRefundId?: string;
    @Field(() => PaymentStatus, {nullable:false})
    status!: `${PaymentStatus}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InfluencerPaymentCreateManySubscriptionInputEnvelope {
    @Field(() => [InfluencerPaymentCreateManySubscriptionInput], {nullable:false})
    @Type(() => InfluencerPaymentCreateManySubscriptionInput)
    data!: Array<InfluencerPaymentCreateManySubscriptionInput>;
}

@InputType()
export class InfluencerPaymentCreateManySubscriptionInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => Int, {nullable:false})
    amountInLowestDenomination!: number;
    @Field(() => Currency, {nullable:false})
    currency!: `${Currency}`;
    @Field(() => String, {nullable:true})
    stripePaymentIntentId?: string;
    @Field(() => String, {nullable:true})
    stripeChargeId?: string;
    @Field(() => String, {nullable:true})
    stripeRefundId?: string;
    @Field(() => PaymentStatus, {nullable:false})
    status!: `${PaymentStatus}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InfluencerPaymentCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => String, {nullable:true})
    subscriptionId?: string;
    @Field(() => Int, {nullable:false})
    amountInLowestDenomination!: number;
    @Field(() => Currency, {nullable:false})
    currency!: `${Currency}`;
    @Field(() => String, {nullable:true})
    stripePaymentIntentId?: string;
    @Field(() => String, {nullable:true})
    stripeChargeId?: string;
    @Field(() => String, {nullable:true})
    stripeRefundId?: string;
    @Field(() => PaymentStatus, {nullable:false})
    status!: `${PaymentStatus}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InfluencerPaymentCreateNestedManyWithoutInfluencerInput {
    @Field(() => [InfluencerPaymentCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentCreateWithoutInfluencerInput)
    create?: Array<InfluencerPaymentCreateWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<InfluencerPaymentCreateOrConnectWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => InfluencerPaymentCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof InfluencerPaymentCreateManyInfluencerInputEnvelope>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
}

@InputType()
export class InfluencerPaymentCreateNestedManyWithoutSubscriptionInput {
    @Field(() => [InfluencerPaymentCreateWithoutSubscriptionInput], {nullable:true})
    @Type(() => InfluencerPaymentCreateWithoutSubscriptionInput)
    create?: Array<InfluencerPaymentCreateWithoutSubscriptionInput>;
    @Field(() => [InfluencerPaymentCreateOrConnectWithoutSubscriptionInput], {nullable:true})
    @Type(() => InfluencerPaymentCreateOrConnectWithoutSubscriptionInput)
    connectOrCreate?: Array<InfluencerPaymentCreateOrConnectWithoutSubscriptionInput>;
    @Field(() => InfluencerPaymentCreateManySubscriptionInputEnvelope, {nullable:true})
    @Type(() => InfluencerPaymentCreateManySubscriptionInputEnvelope)
    createMany?: InstanceType<typeof InfluencerPaymentCreateManySubscriptionInputEnvelope>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
}

@InputType()
export class InfluencerPaymentCreateOrConnectWithoutInfluencerInput {
    @Field(() => InfluencerPaymentWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>;
    @Field(() => InfluencerPaymentCreateWithoutInfluencerInput, {nullable:false})
    @Type(() => InfluencerPaymentCreateWithoutInfluencerInput)
    create!: InstanceType<typeof InfluencerPaymentCreateWithoutInfluencerInput>;
}

@InputType()
export class InfluencerPaymentCreateOrConnectWithoutSubscriptionInput {
    @Field(() => InfluencerPaymentWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>;
    @Field(() => InfluencerPaymentCreateWithoutSubscriptionInput, {nullable:false})
    @Type(() => InfluencerPaymentCreateWithoutSubscriptionInput)
    create!: InstanceType<typeof InfluencerPaymentCreateWithoutSubscriptionInput>;
}

@InputType()
export class InfluencerPaymentCreateWithoutInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    amountInLowestDenomination!: number;
    @Field(() => Currency, {nullable:false})
    currency!: `${Currency}`;
    @Field(() => String, {nullable:true})
    stripePaymentIntentId?: string;
    @Field(() => String, {nullable:true})
    stripeChargeId?: string;
    @Field(() => String, {nullable:true})
    stripeRefundId?: string;
    @Field(() => PaymentStatus, {nullable:false})
    status!: `${PaymentStatus}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InfluencerSubscriptionCreateNestedOneWithoutInfluencerPaymentsInput, {nullable:true})
    subscription?: InstanceType<typeof InfluencerSubscriptionCreateNestedOneWithoutInfluencerPaymentsInput>;
}

@InputType()
export class InfluencerPaymentCreateWithoutSubscriptionInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    amountInLowestDenomination!: number;
    @Field(() => Currency, {nullable:false})
    currency!: `${Currency}`;
    @Field(() => String, {nullable:true})
    stripePaymentIntentId?: string;
    @Field(() => String, {nullable:true})
    stripeChargeId?: string;
    @Field(() => String, {nullable:true})
    stripeRefundId?: string;
    @Field(() => PaymentStatus, {nullable:false})
    status!: `${PaymentStatus}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InfluencerCreateNestedOneWithoutInfluencerPaymentsInput, {nullable:false})
    influencer!: InstanceType<typeof InfluencerCreateNestedOneWithoutInfluencerPaymentsInput>;
}

@InputType()
export class InfluencerPaymentCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    amountInLowestDenomination!: number;
    @Field(() => Currency, {nullable:false})
    currency!: `${Currency}`;
    @Field(() => String, {nullable:true})
    stripePaymentIntentId?: string;
    @Field(() => String, {nullable:true})
    stripeChargeId?: string;
    @Field(() => String, {nullable:true})
    stripeRefundId?: string;
    @Field(() => PaymentStatus, {nullable:false})
    status!: `${PaymentStatus}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InfluencerCreateNestedOneWithoutInfluencerPaymentsInput, {nullable:false})
    influencer!: InstanceType<typeof InfluencerCreateNestedOneWithoutInfluencerPaymentsInput>;
    @Field(() => InfluencerSubscriptionCreateNestedOneWithoutInfluencerPaymentsInput, {nullable:true})
    subscription?: InstanceType<typeof InfluencerSubscriptionCreateNestedOneWithoutInfluencerPaymentsInput>;
}

@ArgsType()
export class InfluencerPaymentGroupByArgs {
    @Field(() => InfluencerPaymentWhereInput, {nullable:true})
    @Type(() => InfluencerPaymentWhereInput)
    where?: InstanceType<typeof InfluencerPaymentWhereInput>;
    @Field(() => [InfluencerPaymentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<InfluencerPaymentOrderByWithAggregationInput>;
    @Field(() => [InfluencerPaymentScalarFieldEnum], {nullable:false})
    by!: Array<`${InfluencerPaymentScalarFieldEnum}`>;
    @Field(() => InfluencerPaymentScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof InfluencerPaymentScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class InfluencerPaymentListRelationFilter {
    @Field(() => InfluencerPaymentWhereInput, {nullable:true})
    every?: InstanceType<typeof InfluencerPaymentWhereInput>;
    @Field(() => InfluencerPaymentWhereInput, {nullable:true})
    some?: InstanceType<typeof InfluencerPaymentWhereInput>;
    @Field(() => InfluencerPaymentWhereInput, {nullable:true})
    none?: InstanceType<typeof InfluencerPaymentWhereInput>;
}

@InputType()
export class InfluencerPaymentMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    subscriptionId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    amountInLowestDenomination?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currency?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripePaymentIntentId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeChargeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeRefundId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class InfluencerPaymentMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    subscriptionId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    amountInLowestDenomination?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currency?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripePaymentIntentId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeChargeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeRefundId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class InfluencerPaymentOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class InfluencerPaymentOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    subscriptionId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    amountInLowestDenomination?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currency?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripePaymentIntentId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeChargeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeRefundId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => InfluencerPaymentCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof InfluencerPaymentCountOrderByAggregateInput>;
    @Field(() => InfluencerPaymentAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof InfluencerPaymentAvgOrderByAggregateInput>;
    @Field(() => InfluencerPaymentMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof InfluencerPaymentMaxOrderByAggregateInput>;
    @Field(() => InfluencerPaymentMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof InfluencerPaymentMinOrderByAggregateInput>;
    @Field(() => InfluencerPaymentSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof InfluencerPaymentSumOrderByAggregateInput>;
}

@InputType()
export class InfluencerPaymentOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    subscriptionId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    amountInLowestDenomination?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currency?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripePaymentIntentId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeChargeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeRefundId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => InfluencerOrderByWithRelationInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerOrderByWithRelationInput>;
    @Field(() => InfluencerSubscriptionOrderByWithRelationInput, {nullable:true})
    subscription?: InstanceType<typeof InfluencerSubscriptionOrderByWithRelationInput>;
}

@InputType()
export class InfluencerPaymentScalarWhereWithAggregatesInput {
    @Field(() => [InfluencerPaymentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<InfluencerPaymentScalarWhereWithAggregatesInput>;
    @Field(() => [InfluencerPaymentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<InfluencerPaymentScalarWhereWithAggregatesInput>;
    @Field(() => [InfluencerPaymentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<InfluencerPaymentScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    subscriptionId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    amountInLowestDenomination?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => EnumCurrencyWithAggregatesFilter, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    stripePaymentIntentId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    stripeChargeId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    stripeRefundId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => EnumPaymentStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumPaymentStatusWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class InfluencerPaymentScalarWhereInput {
    @Field(() => [InfluencerPaymentScalarWhereInput], {nullable:true})
    AND?: Array<InfluencerPaymentScalarWhereInput>;
    @Field(() => [InfluencerPaymentScalarWhereInput], {nullable:true})
    OR?: Array<InfluencerPaymentScalarWhereInput>;
    @Field(() => [InfluencerPaymentScalarWhereInput], {nullable:true})
    NOT?: Array<InfluencerPaymentScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    subscriptionId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => IntFilter, {nullable:true})
    amountInLowestDenomination?: InstanceType<typeof IntFilter>;
    @Field(() => EnumCurrencyFilter, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    stripePaymentIntentId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    stripeChargeId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    stripeRefundId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumPaymentStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumPaymentStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class InfluencerPaymentSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    amountInLowestDenomination?: `${SortOrder}`;
}

@InputType()
export class InfluencerPaymentUncheckedCreateNestedManyWithoutInfluencerInput {
    @Field(() => [InfluencerPaymentCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentCreateWithoutInfluencerInput)
    create?: Array<InfluencerPaymentCreateWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<InfluencerPaymentCreateOrConnectWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => InfluencerPaymentCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof InfluencerPaymentCreateManyInfluencerInputEnvelope>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
}

@InputType()
export class InfluencerPaymentUncheckedCreateNestedManyWithoutSubscriptionInput {
    @Field(() => [InfluencerPaymentCreateWithoutSubscriptionInput], {nullable:true})
    @Type(() => InfluencerPaymentCreateWithoutSubscriptionInput)
    create?: Array<InfluencerPaymentCreateWithoutSubscriptionInput>;
    @Field(() => [InfluencerPaymentCreateOrConnectWithoutSubscriptionInput], {nullable:true})
    @Type(() => InfluencerPaymentCreateOrConnectWithoutSubscriptionInput)
    connectOrCreate?: Array<InfluencerPaymentCreateOrConnectWithoutSubscriptionInput>;
    @Field(() => InfluencerPaymentCreateManySubscriptionInputEnvelope, {nullable:true})
    @Type(() => InfluencerPaymentCreateManySubscriptionInputEnvelope)
    createMany?: InstanceType<typeof InfluencerPaymentCreateManySubscriptionInputEnvelope>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
}

@InputType()
export class InfluencerPaymentUncheckedCreateWithoutInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    subscriptionId?: string;
    @Field(() => Int, {nullable:false})
    amountInLowestDenomination!: number;
    @Field(() => Currency, {nullable:false})
    currency!: `${Currency}`;
    @Field(() => String, {nullable:true})
    stripePaymentIntentId?: string;
    @Field(() => String, {nullable:true})
    stripeChargeId?: string;
    @Field(() => String, {nullable:true})
    stripeRefundId?: string;
    @Field(() => PaymentStatus, {nullable:false})
    status!: `${PaymentStatus}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InfluencerPaymentUncheckedCreateWithoutSubscriptionInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => Int, {nullable:false})
    amountInLowestDenomination!: number;
    @Field(() => Currency, {nullable:false})
    currency!: `${Currency}`;
    @Field(() => String, {nullable:true})
    stripePaymentIntentId?: string;
    @Field(() => String, {nullable:true})
    stripeChargeId?: string;
    @Field(() => String, {nullable:true})
    stripeRefundId?: string;
    @Field(() => PaymentStatus, {nullable:false})
    status!: `${PaymentStatus}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InfluencerPaymentUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => String, {nullable:true})
    subscriptionId?: string;
    @Field(() => Int, {nullable:false})
    amountInLowestDenomination!: number;
    @Field(() => Currency, {nullable:false})
    currency!: `${Currency}`;
    @Field(() => String, {nullable:true})
    stripePaymentIntentId?: string;
    @Field(() => String, {nullable:true})
    stripeChargeId?: string;
    @Field(() => String, {nullable:true})
    stripeRefundId?: string;
    @Field(() => PaymentStatus, {nullable:false})
    status!: `${PaymentStatus}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InfluencerPaymentUncheckedUpdateManyWithoutInfluencerNestedInput {
    @Field(() => [InfluencerPaymentCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentCreateWithoutInfluencerInput)
    create?: Array<InfluencerPaymentCreateWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<InfluencerPaymentCreateOrConnectWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentUpsertWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentUpsertWithWhereUniqueWithoutInfluencerInput)
    upsert?: Array<InfluencerPaymentUpsertWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => InfluencerPaymentCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof InfluencerPaymentCreateManyInfluencerInputEnvelope>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
    @Field(() => [InfluencerPaymentUpdateWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentUpdateWithWhereUniqueWithoutInfluencerInput)
    update?: Array<InfluencerPaymentUpdateWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentUpdateManyWithWhereWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentUpdateManyWithWhereWithoutInfluencerInput)
    updateMany?: Array<InfluencerPaymentUpdateManyWithWhereWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentScalarWhereInput], {nullable:true})
    @Type(() => InfluencerPaymentScalarWhereInput)
    deleteMany?: Array<InfluencerPaymentScalarWhereInput>;
}

@InputType()
export class InfluencerPaymentUncheckedUpdateManyWithoutInfluencerInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subscriptionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    amountInLowestDenomination?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumCurrencyFieldUpdateOperationsInput, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePaymentIntentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeChargeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeRefundId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPaymentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumPaymentStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerPaymentUncheckedUpdateManyWithoutSubscriptionNestedInput {
    @Field(() => [InfluencerPaymentCreateWithoutSubscriptionInput], {nullable:true})
    @Type(() => InfluencerPaymentCreateWithoutSubscriptionInput)
    create?: Array<InfluencerPaymentCreateWithoutSubscriptionInput>;
    @Field(() => [InfluencerPaymentCreateOrConnectWithoutSubscriptionInput], {nullable:true})
    @Type(() => InfluencerPaymentCreateOrConnectWithoutSubscriptionInput)
    connectOrCreate?: Array<InfluencerPaymentCreateOrConnectWithoutSubscriptionInput>;
    @Field(() => [InfluencerPaymentUpsertWithWhereUniqueWithoutSubscriptionInput], {nullable:true})
    @Type(() => InfluencerPaymentUpsertWithWhereUniqueWithoutSubscriptionInput)
    upsert?: Array<InfluencerPaymentUpsertWithWhereUniqueWithoutSubscriptionInput>;
    @Field(() => InfluencerPaymentCreateManySubscriptionInputEnvelope, {nullable:true})
    @Type(() => InfluencerPaymentCreateManySubscriptionInputEnvelope)
    createMany?: InstanceType<typeof InfluencerPaymentCreateManySubscriptionInputEnvelope>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
    @Field(() => [InfluencerPaymentUpdateWithWhereUniqueWithoutSubscriptionInput], {nullable:true})
    @Type(() => InfluencerPaymentUpdateWithWhereUniqueWithoutSubscriptionInput)
    update?: Array<InfluencerPaymentUpdateWithWhereUniqueWithoutSubscriptionInput>;
    @Field(() => [InfluencerPaymentUpdateManyWithWhereWithoutSubscriptionInput], {nullable:true})
    @Type(() => InfluencerPaymentUpdateManyWithWhereWithoutSubscriptionInput)
    updateMany?: Array<InfluencerPaymentUpdateManyWithWhereWithoutSubscriptionInput>;
    @Field(() => [InfluencerPaymentScalarWhereInput], {nullable:true})
    @Type(() => InfluencerPaymentScalarWhereInput)
    deleteMany?: Array<InfluencerPaymentScalarWhereInput>;
}

@InputType()
export class InfluencerPaymentUncheckedUpdateManyWithoutSubscriptionInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    amountInLowestDenomination?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumCurrencyFieldUpdateOperationsInput, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePaymentIntentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeChargeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeRefundId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPaymentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumPaymentStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerPaymentUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subscriptionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    amountInLowestDenomination?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumCurrencyFieldUpdateOperationsInput, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePaymentIntentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeChargeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeRefundId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPaymentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumPaymentStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerPaymentUncheckedUpdateWithoutInfluencerInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subscriptionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    amountInLowestDenomination?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumCurrencyFieldUpdateOperationsInput, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePaymentIntentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeChargeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeRefundId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPaymentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumPaymentStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerPaymentUncheckedUpdateWithoutSubscriptionInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    amountInLowestDenomination?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumCurrencyFieldUpdateOperationsInput, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePaymentIntentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeChargeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeRefundId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPaymentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumPaymentStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerPaymentUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subscriptionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    amountInLowestDenomination?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumCurrencyFieldUpdateOperationsInput, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePaymentIntentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeChargeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeRefundId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPaymentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumPaymentStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerPaymentUpdateManyMutationInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    amountInLowestDenomination?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumCurrencyFieldUpdateOperationsInput, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePaymentIntentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeChargeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeRefundId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPaymentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumPaymentStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerPaymentUpdateManyWithWhereWithoutInfluencerInput {
    @Field(() => InfluencerPaymentScalarWhereInput, {nullable:false})
    @Type(() => InfluencerPaymentScalarWhereInput)
    where!: InstanceType<typeof InfluencerPaymentScalarWhereInput>;
    @Field(() => InfluencerPaymentUpdateManyMutationInput, {nullable:false})
    @Type(() => InfluencerPaymentUpdateManyMutationInput)
    data!: InstanceType<typeof InfluencerPaymentUpdateManyMutationInput>;
}

@InputType()
export class InfluencerPaymentUpdateManyWithWhereWithoutSubscriptionInput {
    @Field(() => InfluencerPaymentScalarWhereInput, {nullable:false})
    @Type(() => InfluencerPaymentScalarWhereInput)
    where!: InstanceType<typeof InfluencerPaymentScalarWhereInput>;
    @Field(() => InfluencerPaymentUpdateManyMutationInput, {nullable:false})
    @Type(() => InfluencerPaymentUpdateManyMutationInput)
    data!: InstanceType<typeof InfluencerPaymentUpdateManyMutationInput>;
}

@InputType()
export class InfluencerPaymentUpdateManyWithoutInfluencerNestedInput {
    @Field(() => [InfluencerPaymentCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentCreateWithoutInfluencerInput)
    create?: Array<InfluencerPaymentCreateWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<InfluencerPaymentCreateOrConnectWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentUpsertWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentUpsertWithWhereUniqueWithoutInfluencerInput)
    upsert?: Array<InfluencerPaymentUpsertWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => InfluencerPaymentCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof InfluencerPaymentCreateManyInfluencerInputEnvelope>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
    @Field(() => [InfluencerPaymentUpdateWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentUpdateWithWhereUniqueWithoutInfluencerInput)
    update?: Array<InfluencerPaymentUpdateWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentUpdateManyWithWhereWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentUpdateManyWithWhereWithoutInfluencerInput)
    updateMany?: Array<InfluencerPaymentUpdateManyWithWhereWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentScalarWhereInput], {nullable:true})
    @Type(() => InfluencerPaymentScalarWhereInput)
    deleteMany?: Array<InfluencerPaymentScalarWhereInput>;
}

@InputType()
export class InfluencerPaymentUpdateManyWithoutSubscriptionNestedInput {
    @Field(() => [InfluencerPaymentCreateWithoutSubscriptionInput], {nullable:true})
    @Type(() => InfluencerPaymentCreateWithoutSubscriptionInput)
    create?: Array<InfluencerPaymentCreateWithoutSubscriptionInput>;
    @Field(() => [InfluencerPaymentCreateOrConnectWithoutSubscriptionInput], {nullable:true})
    @Type(() => InfluencerPaymentCreateOrConnectWithoutSubscriptionInput)
    connectOrCreate?: Array<InfluencerPaymentCreateOrConnectWithoutSubscriptionInput>;
    @Field(() => [InfluencerPaymentUpsertWithWhereUniqueWithoutSubscriptionInput], {nullable:true})
    @Type(() => InfluencerPaymentUpsertWithWhereUniqueWithoutSubscriptionInput)
    upsert?: Array<InfluencerPaymentUpsertWithWhereUniqueWithoutSubscriptionInput>;
    @Field(() => InfluencerPaymentCreateManySubscriptionInputEnvelope, {nullable:true})
    @Type(() => InfluencerPaymentCreateManySubscriptionInputEnvelope)
    createMany?: InstanceType<typeof InfluencerPaymentCreateManySubscriptionInputEnvelope>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
    @Field(() => [InfluencerPaymentWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>>;
    @Field(() => [InfluencerPaymentUpdateWithWhereUniqueWithoutSubscriptionInput], {nullable:true})
    @Type(() => InfluencerPaymentUpdateWithWhereUniqueWithoutSubscriptionInput)
    update?: Array<InfluencerPaymentUpdateWithWhereUniqueWithoutSubscriptionInput>;
    @Field(() => [InfluencerPaymentUpdateManyWithWhereWithoutSubscriptionInput], {nullable:true})
    @Type(() => InfluencerPaymentUpdateManyWithWhereWithoutSubscriptionInput)
    updateMany?: Array<InfluencerPaymentUpdateManyWithWhereWithoutSubscriptionInput>;
    @Field(() => [InfluencerPaymentScalarWhereInput], {nullable:true})
    @Type(() => InfluencerPaymentScalarWhereInput)
    deleteMany?: Array<InfluencerPaymentScalarWhereInput>;
}

@InputType()
export class InfluencerPaymentUpdateWithWhereUniqueWithoutInfluencerInput {
    @Field(() => InfluencerPaymentWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>;
    @Field(() => InfluencerPaymentUpdateWithoutInfluencerInput, {nullable:false})
    @Type(() => InfluencerPaymentUpdateWithoutInfluencerInput)
    data!: InstanceType<typeof InfluencerPaymentUpdateWithoutInfluencerInput>;
}

@InputType()
export class InfluencerPaymentUpdateWithWhereUniqueWithoutSubscriptionInput {
    @Field(() => InfluencerPaymentWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>;
    @Field(() => InfluencerPaymentUpdateWithoutSubscriptionInput, {nullable:false})
    @Type(() => InfluencerPaymentUpdateWithoutSubscriptionInput)
    data!: InstanceType<typeof InfluencerPaymentUpdateWithoutSubscriptionInput>;
}

@InputType()
export class InfluencerPaymentUpdateWithoutInfluencerInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    amountInLowestDenomination?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumCurrencyFieldUpdateOperationsInput, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePaymentIntentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeChargeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeRefundId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPaymentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumPaymentStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InfluencerSubscriptionUpdateOneWithoutInfluencerPaymentsNestedInput, {nullable:true})
    subscription?: InstanceType<typeof InfluencerSubscriptionUpdateOneWithoutInfluencerPaymentsNestedInput>;
}

@InputType()
export class InfluencerPaymentUpdateWithoutSubscriptionInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    amountInLowestDenomination?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumCurrencyFieldUpdateOperationsInput, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePaymentIntentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeChargeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeRefundId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPaymentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumPaymentStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InfluencerUpdateOneRequiredWithoutInfluencerPaymentsNestedInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerUpdateOneRequiredWithoutInfluencerPaymentsNestedInput>;
}

@InputType()
export class InfluencerPaymentUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    amountInLowestDenomination?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumCurrencyFieldUpdateOperationsInput, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePaymentIntentId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeChargeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeRefundId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPaymentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumPaymentStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InfluencerUpdateOneRequiredWithoutInfluencerPaymentsNestedInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerUpdateOneRequiredWithoutInfluencerPaymentsNestedInput>;
    @Field(() => InfluencerSubscriptionUpdateOneWithoutInfluencerPaymentsNestedInput, {nullable:true})
    subscription?: InstanceType<typeof InfluencerSubscriptionUpdateOneWithoutInfluencerPaymentsNestedInput>;
}

@InputType()
export class InfluencerPaymentUpsertWithWhereUniqueWithoutInfluencerInput {
    @Field(() => InfluencerPaymentWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>;
    @Field(() => InfluencerPaymentUpdateWithoutInfluencerInput, {nullable:false})
    @Type(() => InfluencerPaymentUpdateWithoutInfluencerInput)
    update!: InstanceType<typeof InfluencerPaymentUpdateWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentCreateWithoutInfluencerInput, {nullable:false})
    @Type(() => InfluencerPaymentCreateWithoutInfluencerInput)
    create!: InstanceType<typeof InfluencerPaymentCreateWithoutInfluencerInput>;
}

@InputType()
export class InfluencerPaymentUpsertWithWhereUniqueWithoutSubscriptionInput {
    @Field(() => InfluencerPaymentWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>;
    @Field(() => InfluencerPaymentUpdateWithoutSubscriptionInput, {nullable:false})
    @Type(() => InfluencerPaymentUpdateWithoutSubscriptionInput)
    update!: InstanceType<typeof InfluencerPaymentUpdateWithoutSubscriptionInput>;
    @Field(() => InfluencerPaymentCreateWithoutSubscriptionInput, {nullable:false})
    @Type(() => InfluencerPaymentCreateWithoutSubscriptionInput)
    create!: InstanceType<typeof InfluencerPaymentCreateWithoutSubscriptionInput>;
}

@InputType()
export class InfluencerPaymentWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    stripePaymentIntentId?: string;
    @Field(() => String, {nullable:true})
    stripeChargeId?: string;
    @Field(() => String, {nullable:true})
    stripeRefundId?: string;
    @Field(() => [InfluencerPaymentWhereInput], {nullable:true})
    AND?: Array<InfluencerPaymentWhereInput>;
    @Field(() => [InfluencerPaymentWhereInput], {nullable:true})
    OR?: Array<InfluencerPaymentWhereInput>;
    @Field(() => [InfluencerPaymentWhereInput], {nullable:true})
    NOT?: Array<InfluencerPaymentWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    subscriptionId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => IntFilter, {nullable:true})
    amountInLowestDenomination?: InstanceType<typeof IntFilter>;
    @Field(() => EnumCurrencyFilter, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFilter>;
    @Field(() => EnumPaymentStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumPaymentStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => InfluencerScalarRelationFilter, {nullable:true})
    influencer?: InstanceType<typeof InfluencerScalarRelationFilter>;
    @Field(() => InfluencerSubscriptionNullableScalarRelationFilter, {nullable:true})
    subscription?: InstanceType<typeof InfluencerSubscriptionNullableScalarRelationFilter>;
}

@InputType()
export class InfluencerPaymentWhereInput {
    @Field(() => [InfluencerPaymentWhereInput], {nullable:true})
    AND?: Array<InfluencerPaymentWhereInput>;
    @Field(() => [InfluencerPaymentWhereInput], {nullable:true})
    OR?: Array<InfluencerPaymentWhereInput>;
    @Field(() => [InfluencerPaymentWhereInput], {nullable:true})
    NOT?: Array<InfluencerPaymentWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    subscriptionId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => IntFilter, {nullable:true})
    amountInLowestDenomination?: InstanceType<typeof IntFilter>;
    @Field(() => EnumCurrencyFilter, {nullable:true})
    currency?: InstanceType<typeof EnumCurrencyFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    stripePaymentIntentId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    stripeChargeId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    stripeRefundId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumPaymentStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumPaymentStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => InfluencerScalarRelationFilter, {nullable:true})
    influencer?: InstanceType<typeof InfluencerScalarRelationFilter>;
    @Field(() => InfluencerSubscriptionNullableScalarRelationFilter, {nullable:true})
    subscription?: InstanceType<typeof InfluencerSubscriptionNullableScalarRelationFilter>;
}

@ObjectType()
export class InfluencerPayment {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => String, {nullable:true})
    subscriptionId!: string | null;
    @Field(() => Int, {nullable:false})
    amountInLowestDenomination!: number;
    @Field(() => Currency, {nullable:false})
    currency!: `${Currency}`;
    @Field(() => String, {nullable:true})
    stripePaymentIntentId!: string | null;
    @Field(() => String, {nullable:true})
    stripeChargeId!: string | null;
    @Field(() => String, {nullable:true})
    stripeRefundId!: string | null;
    @Field(() => PaymentStatus, {nullable:false})
    status!: `${PaymentStatus}`;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Influencer, {nullable:false})
    influencer?: InstanceType<typeof Influencer>;
    @Field(() => InfluencerSubscription, {nullable:true})
    subscription?: InstanceType<typeof InfluencerSubscription> | null;
}

@ArgsType()
export class UpdateManyInfluencerPaymentArgs {
    @Field(() => InfluencerPaymentUpdateManyMutationInput, {nullable:false})
    @Type(() => InfluencerPaymentUpdateManyMutationInput)
    data!: InstanceType<typeof InfluencerPaymentUpdateManyMutationInput>;
    @Field(() => InfluencerPaymentWhereInput, {nullable:true})
    @Type(() => InfluencerPaymentWhereInput)
    where?: InstanceType<typeof InfluencerPaymentWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneInfluencerPaymentArgs {
    @Field(() => InfluencerPaymentUpdateInput, {nullable:false})
    @Type(() => InfluencerPaymentUpdateInput)
    data!: InstanceType<typeof InfluencerPaymentUpdateInput>;
    @Field(() => InfluencerPaymentWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>;
}

@ArgsType()
export class UpsertOneInfluencerPaymentArgs {
    @Field(() => InfluencerPaymentWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentWhereUniqueInput, 'id' | 'stripePaymentIntentId' | 'stripeChargeId' | 'stripeRefundId'>;
    @Field(() => InfluencerPaymentCreateInput, {nullable:false})
    @Type(() => InfluencerPaymentCreateInput)
    create!: InstanceType<typeof InfluencerPaymentCreateInput>;
    @Field(() => InfluencerPaymentUpdateInput, {nullable:false})
    @Type(() => InfluencerPaymentUpdateInput)
    update!: InstanceType<typeof InfluencerPaymentUpdateInput>;
}

@ArgsType()
export class CreateManyInfluencerPaymentMethodArgs {
    @Field(() => [InfluencerPaymentMethodCreateManyInput], {nullable:false})
    @Type(() => InfluencerPaymentMethodCreateManyInput)
    data!: Array<InfluencerPaymentMethodCreateManyInput>;
}

@ArgsType()
export class CreateOneInfluencerPaymentMethodArgs {
    @Field(() => InfluencerPaymentMethodCreateInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodCreateInput)
    data!: InstanceType<typeof InfluencerPaymentMethodCreateInput>;
}

@ArgsType()
export class DeleteManyInfluencerPaymentMethodArgs {
    @Field(() => InfluencerPaymentMethodWhereInput, {nullable:true})
    @Type(() => InfluencerPaymentMethodWhereInput)
    where?: InstanceType<typeof InfluencerPaymentMethodWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneInfluencerPaymentMethodArgs {
    @Field(() => InfluencerPaymentMethodWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>;
}

@ArgsType()
export class FindFirstInfluencerPaymentMethodOrThrowArgs {
    @Field(() => InfluencerPaymentMethodWhereInput, {nullable:true})
    @Type(() => InfluencerPaymentMethodWhereInput)
    where?: InstanceType<typeof InfluencerPaymentMethodWhereInput>;
    @Field(() => [InfluencerPaymentMethodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerPaymentMethodOrderByWithRelationInput>;
    @Field(() => InfluencerPaymentMethodWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [InfluencerPaymentMethodScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InfluencerPaymentMethodScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstInfluencerPaymentMethodArgs {
    @Field(() => InfluencerPaymentMethodWhereInput, {nullable:true})
    @Type(() => InfluencerPaymentMethodWhereInput)
    where?: InstanceType<typeof InfluencerPaymentMethodWhereInput>;
    @Field(() => [InfluencerPaymentMethodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerPaymentMethodOrderByWithRelationInput>;
    @Field(() => InfluencerPaymentMethodWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [InfluencerPaymentMethodScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InfluencerPaymentMethodScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyInfluencerPaymentMethodArgs {
    @Field(() => InfluencerPaymentMethodWhereInput, {nullable:true})
    @Type(() => InfluencerPaymentMethodWhereInput)
    where?: InstanceType<typeof InfluencerPaymentMethodWhereInput>;
    @Field(() => [InfluencerPaymentMethodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerPaymentMethodOrderByWithRelationInput>;
    @Field(() => InfluencerPaymentMethodWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [InfluencerPaymentMethodScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InfluencerPaymentMethodScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueInfluencerPaymentMethodOrThrowArgs {
    @Field(() => InfluencerPaymentMethodWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>;
}

@ArgsType()
export class FindUniqueInfluencerPaymentMethodArgs {
    @Field(() => InfluencerPaymentMethodWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>;
}

@ArgsType()
export class InfluencerPaymentMethodAggregateArgs {
    @Field(() => InfluencerPaymentMethodWhereInput, {nullable:true})
    @Type(() => InfluencerPaymentMethodWhereInput)
    where?: InstanceType<typeof InfluencerPaymentMethodWhereInput>;
    @Field(() => [InfluencerPaymentMethodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerPaymentMethodOrderByWithRelationInput>;
    @Field(() => InfluencerPaymentMethodWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class InfluencerPaymentMethodAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    expMonth?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expYear?: `${SortOrder}`;
}

@InputType()
export class InfluencerPaymentMethodCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    last4?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    brand?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    country?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    funding?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expMonth?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expYear?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripePaymentMethodId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    default?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class InfluencerPaymentMethodCreateManyInfluencerInputEnvelope {
    @Field(() => [InfluencerPaymentMethodCreateManyInfluencerInput], {nullable:false})
    @Type(() => InfluencerPaymentMethodCreateManyInfluencerInput)
    data!: Array<InfluencerPaymentMethodCreateManyInfluencerInput>;
}

@InputType()
export class InfluencerPaymentMethodCreateManyInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    last4?: string;
    @Field(() => String, {nullable:true})
    brand?: string;
    @Field(() => String, {nullable:true})
    country?: string;
    @Field(() => String, {nullable:true})
    funding?: string;
    @Field(() => Int, {nullable:true})
    expMonth?: number;
    @Field(() => Int, {nullable:true})
    expYear?: number;
    @Field(() => String, {nullable:true})
    stripePaymentMethodId?: string;
    @Field(() => Boolean, {nullable:true})
    default?: boolean;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InfluencerPaymentMethodCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    last4?: string;
    @Field(() => String, {nullable:true})
    brand?: string;
    @Field(() => String, {nullable:true})
    country?: string;
    @Field(() => String, {nullable:true})
    funding?: string;
    @Field(() => Int, {nullable:true})
    expMonth?: number;
    @Field(() => Int, {nullable:true})
    expYear?: number;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => String, {nullable:true})
    stripePaymentMethodId?: string;
    @Field(() => Boolean, {nullable:true})
    default?: boolean;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InfluencerPaymentMethodCreateNestedManyWithoutInfluencerInput {
    @Field(() => [InfluencerPaymentMethodCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodCreateWithoutInfluencerInput)
    create?: Array<InfluencerPaymentMethodCreateWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentMethodCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<InfluencerPaymentMethodCreateOrConnectWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentMethodCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => InfluencerPaymentMethodCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof InfluencerPaymentMethodCreateManyInfluencerInputEnvelope>;
    @Field(() => [InfluencerPaymentMethodWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>>;
}

@InputType()
export class InfluencerPaymentMethodCreateOrConnectWithoutInfluencerInput {
    @Field(() => InfluencerPaymentMethodWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>;
    @Field(() => InfluencerPaymentMethodCreateWithoutInfluencerInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodCreateWithoutInfluencerInput)
    create!: InstanceType<typeof InfluencerPaymentMethodCreateWithoutInfluencerInput>;
}

@InputType()
export class InfluencerPaymentMethodCreateWithoutInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    last4?: string;
    @Field(() => String, {nullable:true})
    brand?: string;
    @Field(() => String, {nullable:true})
    country?: string;
    @Field(() => String, {nullable:true})
    funding?: string;
    @Field(() => Int, {nullable:true})
    expMonth?: number;
    @Field(() => Int, {nullable:true})
    expYear?: number;
    @Field(() => String, {nullable:true})
    stripePaymentMethodId?: string;
    @Field(() => Boolean, {nullable:true})
    default?: boolean;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InfluencerPaymentMethodCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    last4?: string;
    @Field(() => String, {nullable:true})
    brand?: string;
    @Field(() => String, {nullable:true})
    country?: string;
    @Field(() => String, {nullable:true})
    funding?: string;
    @Field(() => Int, {nullable:true})
    expMonth?: number;
    @Field(() => Int, {nullable:true})
    expYear?: number;
    @Field(() => String, {nullable:true})
    stripePaymentMethodId?: string;
    @Field(() => Boolean, {nullable:true})
    default?: boolean;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InfluencerCreateNestedOneWithoutPaymentMethodsInput, {nullable:false})
    influencer!: InstanceType<typeof InfluencerCreateNestedOneWithoutPaymentMethodsInput>;
}

@ArgsType()
export class InfluencerPaymentMethodGroupByArgs {
    @Field(() => InfluencerPaymentMethodWhereInput, {nullable:true})
    @Type(() => InfluencerPaymentMethodWhereInput)
    where?: InstanceType<typeof InfluencerPaymentMethodWhereInput>;
    @Field(() => [InfluencerPaymentMethodOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<InfluencerPaymentMethodOrderByWithAggregationInput>;
    @Field(() => [InfluencerPaymentMethodScalarFieldEnum], {nullable:false})
    by!: Array<`${InfluencerPaymentMethodScalarFieldEnum}`>;
    @Field(() => InfluencerPaymentMethodScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof InfluencerPaymentMethodScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class InfluencerPaymentMethodListRelationFilter {
    @Field(() => InfluencerPaymentMethodWhereInput, {nullable:true})
    every?: InstanceType<typeof InfluencerPaymentMethodWhereInput>;
    @Field(() => InfluencerPaymentMethodWhereInput, {nullable:true})
    some?: InstanceType<typeof InfluencerPaymentMethodWhereInput>;
    @Field(() => InfluencerPaymentMethodWhereInput, {nullable:true})
    none?: InstanceType<typeof InfluencerPaymentMethodWhereInput>;
}

@InputType()
export class InfluencerPaymentMethodMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    last4?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    brand?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    country?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    funding?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expMonth?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expYear?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripePaymentMethodId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    default?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class InfluencerPaymentMethodMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    last4?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    brand?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    country?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    funding?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expMonth?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expYear?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripePaymentMethodId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    default?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class InfluencerPaymentMethodOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class InfluencerPaymentMethodOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    last4?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    brand?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    country?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    funding?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expMonth?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expYear?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripePaymentMethodId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    default?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => InfluencerPaymentMethodCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof InfluencerPaymentMethodCountOrderByAggregateInput>;
    @Field(() => InfluencerPaymentMethodAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof InfluencerPaymentMethodAvgOrderByAggregateInput>;
    @Field(() => InfluencerPaymentMethodMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof InfluencerPaymentMethodMaxOrderByAggregateInput>;
    @Field(() => InfluencerPaymentMethodMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof InfluencerPaymentMethodMinOrderByAggregateInput>;
    @Field(() => InfluencerPaymentMethodSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof InfluencerPaymentMethodSumOrderByAggregateInput>;
}

@InputType()
export class InfluencerPaymentMethodOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    last4?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    brand?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    country?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    funding?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expMonth?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expYear?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripePaymentMethodId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    default?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => InfluencerOrderByWithRelationInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerOrderByWithRelationInput>;
}

@InputType()
export class InfluencerPaymentMethodScalarWhereWithAggregatesInput {
    @Field(() => [InfluencerPaymentMethodScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<InfluencerPaymentMethodScalarWhereWithAggregatesInput>;
    @Field(() => [InfluencerPaymentMethodScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<InfluencerPaymentMethodScalarWhereWithAggregatesInput>;
    @Field(() => [InfluencerPaymentMethodScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<InfluencerPaymentMethodScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    last4?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    brand?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    country?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    funding?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    expMonth?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    expYear?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    stripePaymentMethodId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    default?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class InfluencerPaymentMethodScalarWhereInput {
    @Field(() => [InfluencerPaymentMethodScalarWhereInput], {nullable:true})
    AND?: Array<InfluencerPaymentMethodScalarWhereInput>;
    @Field(() => [InfluencerPaymentMethodScalarWhereInput], {nullable:true})
    OR?: Array<InfluencerPaymentMethodScalarWhereInput>;
    @Field(() => [InfluencerPaymentMethodScalarWhereInput], {nullable:true})
    NOT?: Array<InfluencerPaymentMethodScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    last4?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    brand?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    country?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    funding?: InstanceType<typeof StringNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    expMonth?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    expYear?: InstanceType<typeof IntNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    stripePaymentMethodId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    default?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class InfluencerPaymentMethodSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    expMonth?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expYear?: `${SortOrder}`;
}

@InputType()
export class InfluencerPaymentMethodUncheckedCreateNestedManyWithoutInfluencerInput {
    @Field(() => [InfluencerPaymentMethodCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodCreateWithoutInfluencerInput)
    create?: Array<InfluencerPaymentMethodCreateWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentMethodCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<InfluencerPaymentMethodCreateOrConnectWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentMethodCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => InfluencerPaymentMethodCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof InfluencerPaymentMethodCreateManyInfluencerInputEnvelope>;
    @Field(() => [InfluencerPaymentMethodWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>>;
}

@InputType()
export class InfluencerPaymentMethodUncheckedCreateWithoutInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    last4?: string;
    @Field(() => String, {nullable:true})
    brand?: string;
    @Field(() => String, {nullable:true})
    country?: string;
    @Field(() => String, {nullable:true})
    funding?: string;
    @Field(() => Int, {nullable:true})
    expMonth?: number;
    @Field(() => Int, {nullable:true})
    expYear?: number;
    @Field(() => String, {nullable:true})
    stripePaymentMethodId?: string;
    @Field(() => Boolean, {nullable:true})
    default?: boolean;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InfluencerPaymentMethodUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    last4?: string;
    @Field(() => String, {nullable:true})
    brand?: string;
    @Field(() => String, {nullable:true})
    country?: string;
    @Field(() => String, {nullable:true})
    funding?: string;
    @Field(() => Int, {nullable:true})
    expMonth?: number;
    @Field(() => Int, {nullable:true})
    expYear?: number;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => String, {nullable:true})
    stripePaymentMethodId?: string;
    @Field(() => Boolean, {nullable:true})
    default?: boolean;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InfluencerPaymentMethodUncheckedUpdateManyWithoutInfluencerNestedInput {
    @Field(() => [InfluencerPaymentMethodCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodCreateWithoutInfluencerInput)
    create?: Array<InfluencerPaymentMethodCreateWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentMethodCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<InfluencerPaymentMethodCreateOrConnectWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentMethodUpsertWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodUpsertWithWhereUniqueWithoutInfluencerInput)
    upsert?: Array<InfluencerPaymentMethodUpsertWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentMethodCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => InfluencerPaymentMethodCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof InfluencerPaymentMethodCreateManyInfluencerInputEnvelope>;
    @Field(() => [InfluencerPaymentMethodWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    set?: Array<Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>>;
    @Field(() => [InfluencerPaymentMethodWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>>;
    @Field(() => [InfluencerPaymentMethodWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>>;
    @Field(() => [InfluencerPaymentMethodWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>>;
    @Field(() => [InfluencerPaymentMethodUpdateWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodUpdateWithWhereUniqueWithoutInfluencerInput)
    update?: Array<InfluencerPaymentMethodUpdateWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentMethodUpdateManyWithWhereWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodUpdateManyWithWhereWithoutInfluencerInput)
    updateMany?: Array<InfluencerPaymentMethodUpdateManyWithWhereWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentMethodScalarWhereInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodScalarWhereInput)
    deleteMany?: Array<InfluencerPaymentMethodScalarWhereInput>;
}

@InputType()
export class InfluencerPaymentMethodUncheckedUpdateManyWithoutInfluencerInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    last4?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    country?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    funding?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    expMonth?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    expYear?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    default?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerPaymentMethodUncheckedUpdateManyInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    last4?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    country?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    funding?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    expMonth?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    expYear?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    default?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerPaymentMethodUncheckedUpdateWithoutInfluencerInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    last4?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    country?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    funding?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    expMonth?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    expYear?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    default?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerPaymentMethodUncheckedUpdateInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    last4?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    country?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    funding?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    expMonth?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    expYear?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    default?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerPaymentMethodUpdateManyMutationInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    last4?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    country?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    funding?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    expMonth?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    expYear?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    default?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerPaymentMethodUpdateManyWithWhereWithoutInfluencerInput {
    @Field(() => InfluencerPaymentMethodScalarWhereInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodScalarWhereInput)
    where!: InstanceType<typeof InfluencerPaymentMethodScalarWhereInput>;
    @Field(() => InfluencerPaymentMethodUpdateManyMutationInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodUpdateManyMutationInput)
    data!: InstanceType<typeof InfluencerPaymentMethodUpdateManyMutationInput>;
}

@InputType()
export class InfluencerPaymentMethodUpdateManyWithoutInfluencerNestedInput {
    @Field(() => [InfluencerPaymentMethodCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodCreateWithoutInfluencerInput)
    create?: Array<InfluencerPaymentMethodCreateWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentMethodCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<InfluencerPaymentMethodCreateOrConnectWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentMethodUpsertWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodUpsertWithWhereUniqueWithoutInfluencerInput)
    upsert?: Array<InfluencerPaymentMethodUpsertWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentMethodCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => InfluencerPaymentMethodCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof InfluencerPaymentMethodCreateManyInfluencerInputEnvelope>;
    @Field(() => [InfluencerPaymentMethodWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    set?: Array<Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>>;
    @Field(() => [InfluencerPaymentMethodWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>>;
    @Field(() => [InfluencerPaymentMethodWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>>;
    @Field(() => [InfluencerPaymentMethodWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>>;
    @Field(() => [InfluencerPaymentMethodUpdateWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodUpdateWithWhereUniqueWithoutInfluencerInput)
    update?: Array<InfluencerPaymentMethodUpdateWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentMethodUpdateManyWithWhereWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodUpdateManyWithWhereWithoutInfluencerInput)
    updateMany?: Array<InfluencerPaymentMethodUpdateManyWithWhereWithoutInfluencerInput>;
    @Field(() => [InfluencerPaymentMethodScalarWhereInput], {nullable:true})
    @Type(() => InfluencerPaymentMethodScalarWhereInput)
    deleteMany?: Array<InfluencerPaymentMethodScalarWhereInput>;
}

@InputType()
export class InfluencerPaymentMethodUpdateWithWhereUniqueWithoutInfluencerInput {
    @Field(() => InfluencerPaymentMethodWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>;
    @Field(() => InfluencerPaymentMethodUpdateWithoutInfluencerInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodUpdateWithoutInfluencerInput)
    data!: InstanceType<typeof InfluencerPaymentMethodUpdateWithoutInfluencerInput>;
}

@InputType()
export class InfluencerPaymentMethodUpdateWithoutInfluencerInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    last4?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    country?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    funding?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    expMonth?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    expYear?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    default?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerPaymentMethodUpdateInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    last4?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    country?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    funding?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    expMonth?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    expYear?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripePaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    default?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InfluencerUpdateOneRequiredWithoutPaymentMethodsNestedInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerUpdateOneRequiredWithoutPaymentMethodsNestedInput>;
}

@InputType()
export class InfluencerPaymentMethodUpsertWithWhereUniqueWithoutInfluencerInput {
    @Field(() => InfluencerPaymentMethodWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>;
    @Field(() => InfluencerPaymentMethodUpdateWithoutInfluencerInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodUpdateWithoutInfluencerInput)
    update!: InstanceType<typeof InfluencerPaymentMethodUpdateWithoutInfluencerInput>;
    @Field(() => InfluencerPaymentMethodCreateWithoutInfluencerInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodCreateWithoutInfluencerInput)
    create!: InstanceType<typeof InfluencerPaymentMethodCreateWithoutInfluencerInput>;
}

@InputType()
export class InfluencerPaymentMethodWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    stripePaymentMethodId?: string;
    @Field(() => [InfluencerPaymentMethodWhereInput], {nullable:true})
    AND?: Array<InfluencerPaymentMethodWhereInput>;
    @Field(() => [InfluencerPaymentMethodWhereInput], {nullable:true})
    OR?: Array<InfluencerPaymentMethodWhereInput>;
    @Field(() => [InfluencerPaymentMethodWhereInput], {nullable:true})
    NOT?: Array<InfluencerPaymentMethodWhereInput>;
    @Field(() => StringNullableFilter, {nullable:true})
    last4?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    brand?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    country?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    funding?: InstanceType<typeof StringNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    expMonth?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    expYear?: InstanceType<typeof IntNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    default?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => InfluencerScalarRelationFilter, {nullable:true})
    influencer?: InstanceType<typeof InfluencerScalarRelationFilter>;
}

@InputType()
export class InfluencerPaymentMethodWhereInput {
    @Field(() => [InfluencerPaymentMethodWhereInput], {nullable:true})
    AND?: Array<InfluencerPaymentMethodWhereInput>;
    @Field(() => [InfluencerPaymentMethodWhereInput], {nullable:true})
    OR?: Array<InfluencerPaymentMethodWhereInput>;
    @Field(() => [InfluencerPaymentMethodWhereInput], {nullable:true})
    NOT?: Array<InfluencerPaymentMethodWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    last4?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    brand?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    country?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    funding?: InstanceType<typeof StringNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    expMonth?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    expYear?: InstanceType<typeof IntNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    stripePaymentMethodId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    default?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => InfluencerScalarRelationFilter, {nullable:true})
    influencer?: InstanceType<typeof InfluencerScalarRelationFilter>;
}

@ObjectType()
export class InfluencerPaymentMethod {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    last4!: string | null;
    @Field(() => String, {nullable:true})
    brand!: string | null;
    @Field(() => String, {nullable:true})
    country!: string | null;
    @Field(() => String, {nullable:true})
    funding!: string | null;
    @Field(() => Int, {nullable:true})
    expMonth!: number | null;
    @Field(() => Int, {nullable:true})
    expYear!: number | null;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => String, {nullable:true})
    stripePaymentMethodId!: string | null;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    default!: boolean;
    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Influencer, {nullable:false})
    influencer?: InstanceType<typeof Influencer>;
}

@ArgsType()
export class UpdateManyInfluencerPaymentMethodArgs {
    @Field(() => InfluencerPaymentMethodUpdateManyMutationInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodUpdateManyMutationInput)
    data!: InstanceType<typeof InfluencerPaymentMethodUpdateManyMutationInput>;
    @Field(() => InfluencerPaymentMethodWhereInput, {nullable:true})
    @Type(() => InfluencerPaymentMethodWhereInput)
    where?: InstanceType<typeof InfluencerPaymentMethodWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneInfluencerPaymentMethodArgs {
    @Field(() => InfluencerPaymentMethodUpdateInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodUpdateInput)
    data!: InstanceType<typeof InfluencerPaymentMethodUpdateInput>;
    @Field(() => InfluencerPaymentMethodWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>;
}

@ArgsType()
export class UpsertOneInfluencerPaymentMethodArgs {
    @Field(() => InfluencerPaymentMethodWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerPaymentMethodWhereUniqueInput, 'id' | 'stripePaymentMethodId'>;
    @Field(() => InfluencerPaymentMethodCreateInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodCreateInput)
    create!: InstanceType<typeof InfluencerPaymentMethodCreateInput>;
    @Field(() => InfluencerPaymentMethodUpdateInput, {nullable:false})
    @Type(() => InfluencerPaymentMethodUpdateInput)
    update!: InstanceType<typeof InfluencerPaymentMethodUpdateInput>;
}

@ArgsType()
export class CreateManyInfluencerSubscriptionArgs {
    @Field(() => [InfluencerSubscriptionCreateManyInput], {nullable:false})
    @Type(() => InfluencerSubscriptionCreateManyInput)
    data!: Array<InfluencerSubscriptionCreateManyInput>;
}

@ArgsType()
export class CreateOneInfluencerSubscriptionArgs {
    @Field(() => InfluencerSubscriptionCreateInput, {nullable:false})
    @Type(() => InfluencerSubscriptionCreateInput)
    data!: InstanceType<typeof InfluencerSubscriptionCreateInput>;
}

@ArgsType()
export class DeleteManyInfluencerSubscriptionArgs {
    @Field(() => InfluencerSubscriptionWhereInput, {nullable:true})
    @Type(() => InfluencerSubscriptionWhereInput)
    where?: InstanceType<typeof InfluencerSubscriptionWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneInfluencerSubscriptionArgs {
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
}

@ArgsType()
export class FindFirstInfluencerSubscriptionOrThrowArgs {
    @Field(() => InfluencerSubscriptionWhereInput, {nullable:true})
    @Type(() => InfluencerSubscriptionWhereInput)
    where?: InstanceType<typeof InfluencerSubscriptionWhereInput>;
    @Field(() => [InfluencerSubscriptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerSubscriptionOrderByWithRelationInput>;
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [InfluencerSubscriptionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InfluencerSubscriptionScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstInfluencerSubscriptionArgs {
    @Field(() => InfluencerSubscriptionWhereInput, {nullable:true})
    @Type(() => InfluencerSubscriptionWhereInput)
    where?: InstanceType<typeof InfluencerSubscriptionWhereInput>;
    @Field(() => [InfluencerSubscriptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerSubscriptionOrderByWithRelationInput>;
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [InfluencerSubscriptionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InfluencerSubscriptionScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyInfluencerSubscriptionArgs {
    @Field(() => InfluencerSubscriptionWhereInput, {nullable:true})
    @Type(() => InfluencerSubscriptionWhereInput)
    where?: InstanceType<typeof InfluencerSubscriptionWhereInput>;
    @Field(() => [InfluencerSubscriptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerSubscriptionOrderByWithRelationInput>;
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [InfluencerSubscriptionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InfluencerSubscriptionScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueInfluencerSubscriptionOrThrowArgs {
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
}

@ArgsType()
export class FindUniqueInfluencerSubscriptionArgs {
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
}

@ArgsType()
export class InfluencerSubscriptionAggregateArgs {
    @Field(() => InfluencerSubscriptionWhereInput, {nullable:true})
    @Type(() => InfluencerSubscriptionWhereInput)
    where?: InstanceType<typeof InfluencerSubscriptionWhereInput>;
    @Field(() => [InfluencerSubscriptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerSubscriptionOrderByWithRelationInput>;
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class InfluencerSubscriptionCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    planId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeSubscriptionId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currentPeriodStart?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currentPeriodEnd?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    cancelAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    cancelAtPeriodEnd?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    defaultPaymentMethodId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class InfluencerSubscriptionCreateManyInfluencerInputEnvelope {
    @Field(() => [InfluencerSubscriptionCreateManyInfluencerInput], {nullable:false})
    @Type(() => InfluencerSubscriptionCreateManyInfluencerInput)
    data!: Array<InfluencerSubscriptionCreateManyInfluencerInput>;
}

@InputType()
export class InfluencerSubscriptionCreateManyInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    planId!: string;
    @Field(() => String, {nullable:true})
    stripeSubscriptionId?: string;
    @Field(() => SubscriptionStatus, {nullable:false})
    status!: `${SubscriptionStatus}`;
    @Field(() => Date, {nullable:false})
    currentPeriodStart!: Date | string;
    @Field(() => Date, {nullable:false})
    currentPeriodEnd!: Date | string;
    @Field(() => Date, {nullable:true})
    cancelAt?: Date | string;
    @Field(() => Boolean, {nullable:true})
    cancelAtPeriodEnd?: boolean;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => String, {nullable:true})
    defaultPaymentMethodId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InfluencerSubscriptionCreateManyPlanInputEnvelope {
    @Field(() => [InfluencerSubscriptionCreateManyPlanInput], {nullable:false})
    @Type(() => InfluencerSubscriptionCreateManyPlanInput)
    data!: Array<InfluencerSubscriptionCreateManyPlanInput>;
}

@InputType()
export class InfluencerSubscriptionCreateManyPlanInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => String, {nullable:true})
    stripeSubscriptionId?: string;
    @Field(() => SubscriptionStatus, {nullable:false})
    status!: `${SubscriptionStatus}`;
    @Field(() => Date, {nullable:false})
    currentPeriodStart!: Date | string;
    @Field(() => Date, {nullable:false})
    currentPeriodEnd!: Date | string;
    @Field(() => Date, {nullable:true})
    cancelAt?: Date | string;
    @Field(() => Boolean, {nullable:true})
    cancelAtPeriodEnd?: boolean;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => String, {nullable:true})
    defaultPaymentMethodId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InfluencerSubscriptionCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => String, {nullable:false})
    planId!: string;
    @Field(() => String, {nullable:true})
    stripeSubscriptionId?: string;
    @Field(() => SubscriptionStatus, {nullable:false})
    status!: `${SubscriptionStatus}`;
    @Field(() => Date, {nullable:false})
    currentPeriodStart!: Date | string;
    @Field(() => Date, {nullable:false})
    currentPeriodEnd!: Date | string;
    @Field(() => Date, {nullable:true})
    cancelAt?: Date | string;
    @Field(() => Boolean, {nullable:true})
    cancelAtPeriodEnd?: boolean;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => String, {nullable:true})
    defaultPaymentMethodId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InfluencerSubscriptionCreateNestedManyWithoutInfluencerInput {
    @Field(() => [InfluencerSubscriptionCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerSubscriptionCreateWithoutInfluencerInput)
    create?: Array<InfluencerSubscriptionCreateWithoutInfluencerInput>;
    @Field(() => [InfluencerSubscriptionCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerSubscriptionCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<InfluencerSubscriptionCreateOrConnectWithoutInfluencerInput>;
    @Field(() => InfluencerSubscriptionCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => InfluencerSubscriptionCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof InfluencerSubscriptionCreateManyInfluencerInputEnvelope>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
}

@InputType()
export class InfluencerSubscriptionCreateNestedManyWithoutPlanInput {
    @Field(() => [InfluencerSubscriptionCreateWithoutPlanInput], {nullable:true})
    @Type(() => InfluencerSubscriptionCreateWithoutPlanInput)
    create?: Array<InfluencerSubscriptionCreateWithoutPlanInput>;
    @Field(() => [InfluencerSubscriptionCreateOrConnectWithoutPlanInput], {nullable:true})
    @Type(() => InfluencerSubscriptionCreateOrConnectWithoutPlanInput)
    connectOrCreate?: Array<InfluencerSubscriptionCreateOrConnectWithoutPlanInput>;
    @Field(() => InfluencerSubscriptionCreateManyPlanInputEnvelope, {nullable:true})
    @Type(() => InfluencerSubscriptionCreateManyPlanInputEnvelope)
    createMany?: InstanceType<typeof InfluencerSubscriptionCreateManyPlanInputEnvelope>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
}

@InputType()
export class InfluencerSubscriptionCreateNestedOneWithoutInfluencerPaymentsInput {
    @Field(() => InfluencerSubscriptionCreateWithoutInfluencerPaymentsInput, {nullable:true})
    @Type(() => InfluencerSubscriptionCreateWithoutInfluencerPaymentsInput)
    create?: InstanceType<typeof InfluencerSubscriptionCreateWithoutInfluencerPaymentsInput>;
    @Field(() => InfluencerSubscriptionCreateOrConnectWithoutInfluencerPaymentsInput, {nullable:true})
    @Type(() => InfluencerSubscriptionCreateOrConnectWithoutInfluencerPaymentsInput)
    connectOrCreate?: InstanceType<typeof InfluencerSubscriptionCreateOrConnectWithoutInfluencerPaymentsInput>;
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    connect?: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
}

@InputType()
export class InfluencerSubscriptionCreateOrConnectWithoutInfluencerPaymentsInput {
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
    @Field(() => InfluencerSubscriptionCreateWithoutInfluencerPaymentsInput, {nullable:false})
    @Type(() => InfluencerSubscriptionCreateWithoutInfluencerPaymentsInput)
    create!: InstanceType<typeof InfluencerSubscriptionCreateWithoutInfluencerPaymentsInput>;
}

@InputType()
export class InfluencerSubscriptionCreateOrConnectWithoutInfluencerInput {
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
    @Field(() => InfluencerSubscriptionCreateWithoutInfluencerInput, {nullable:false})
    @Type(() => InfluencerSubscriptionCreateWithoutInfluencerInput)
    create!: InstanceType<typeof InfluencerSubscriptionCreateWithoutInfluencerInput>;
}

@InputType()
export class InfluencerSubscriptionCreateOrConnectWithoutPlanInput {
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
    @Field(() => InfluencerSubscriptionCreateWithoutPlanInput, {nullable:false})
    @Type(() => InfluencerSubscriptionCreateWithoutPlanInput)
    create!: InstanceType<typeof InfluencerSubscriptionCreateWithoutPlanInput>;
}

@InputType()
export class InfluencerSubscriptionCreateWithoutInfluencerPaymentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    stripeSubscriptionId?: string;
    @Field(() => SubscriptionStatus, {nullable:false})
    status!: `${SubscriptionStatus}`;
    @Field(() => Date, {nullable:false})
    currentPeriodStart!: Date | string;
    @Field(() => Date, {nullable:false})
    currentPeriodEnd!: Date | string;
    @Field(() => Date, {nullable:true})
    cancelAt?: Date | string;
    @Field(() => Boolean, {nullable:true})
    cancelAtPeriodEnd?: boolean;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => String, {nullable:true})
    defaultPaymentMethodId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InfluencerCreateNestedOneWithoutInfluencerSubscriptionsInput, {nullable:false})
    influencer!: InstanceType<typeof InfluencerCreateNestedOneWithoutInfluencerSubscriptionsInput>;
    @Field(() => InflucenerPlanCreateNestedOneWithoutInfluencerSubscriptionsInput, {nullable:false})
    plan!: InstanceType<typeof InflucenerPlanCreateNestedOneWithoutInfluencerSubscriptionsInput>;
}

@InputType()
export class InfluencerSubscriptionCreateWithoutInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    stripeSubscriptionId?: string;
    @Field(() => SubscriptionStatus, {nullable:false})
    status!: `${SubscriptionStatus}`;
    @Field(() => Date, {nullable:false})
    currentPeriodStart!: Date | string;
    @Field(() => Date, {nullable:false})
    currentPeriodEnd!: Date | string;
    @Field(() => Date, {nullable:true})
    cancelAt?: Date | string;
    @Field(() => Boolean, {nullable:true})
    cancelAtPeriodEnd?: boolean;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => String, {nullable:true})
    defaultPaymentMethodId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InflucenerPlanCreateNestedOneWithoutInfluencerSubscriptionsInput, {nullable:false})
    plan!: InstanceType<typeof InflucenerPlanCreateNestedOneWithoutInfluencerSubscriptionsInput>;
    @Field(() => InfluencerPaymentCreateNestedManyWithoutSubscriptionInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentCreateNestedManyWithoutSubscriptionInput>;
}

@InputType()
export class InfluencerSubscriptionCreateWithoutPlanInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    stripeSubscriptionId?: string;
    @Field(() => SubscriptionStatus, {nullable:false})
    status!: `${SubscriptionStatus}`;
    @Field(() => Date, {nullable:false})
    currentPeriodStart!: Date | string;
    @Field(() => Date, {nullable:false})
    currentPeriodEnd!: Date | string;
    @Field(() => Date, {nullable:true})
    cancelAt?: Date | string;
    @Field(() => Boolean, {nullable:true})
    cancelAtPeriodEnd?: boolean;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => String, {nullable:true})
    defaultPaymentMethodId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InfluencerCreateNestedOneWithoutInfluencerSubscriptionsInput, {nullable:false})
    influencer!: InstanceType<typeof InfluencerCreateNestedOneWithoutInfluencerSubscriptionsInput>;
    @Field(() => InfluencerPaymentCreateNestedManyWithoutSubscriptionInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentCreateNestedManyWithoutSubscriptionInput>;
}

@InputType()
export class InfluencerSubscriptionCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    stripeSubscriptionId?: string;
    @Field(() => SubscriptionStatus, {nullable:false})
    status!: `${SubscriptionStatus}`;
    @Field(() => Date, {nullable:false})
    currentPeriodStart!: Date | string;
    @Field(() => Date, {nullable:false})
    currentPeriodEnd!: Date | string;
    @Field(() => Date, {nullable:true})
    cancelAt?: Date | string;
    @Field(() => Boolean, {nullable:true})
    cancelAtPeriodEnd?: boolean;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => String, {nullable:true})
    defaultPaymentMethodId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InfluencerCreateNestedOneWithoutInfluencerSubscriptionsInput, {nullable:false})
    influencer!: InstanceType<typeof InfluencerCreateNestedOneWithoutInfluencerSubscriptionsInput>;
    @Field(() => InflucenerPlanCreateNestedOneWithoutInfluencerSubscriptionsInput, {nullable:false})
    plan!: InstanceType<typeof InflucenerPlanCreateNestedOneWithoutInfluencerSubscriptionsInput>;
    @Field(() => InfluencerPaymentCreateNestedManyWithoutSubscriptionInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentCreateNestedManyWithoutSubscriptionInput>;
}

@ArgsType()
export class InfluencerSubscriptionGroupByArgs {
    @Field(() => InfluencerSubscriptionWhereInput, {nullable:true})
    @Type(() => InfluencerSubscriptionWhereInput)
    where?: InstanceType<typeof InfluencerSubscriptionWhereInput>;
    @Field(() => [InfluencerSubscriptionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<InfluencerSubscriptionOrderByWithAggregationInput>;
    @Field(() => [InfluencerSubscriptionScalarFieldEnum], {nullable:false})
    by!: Array<`${InfluencerSubscriptionScalarFieldEnum}`>;
    @Field(() => InfluencerSubscriptionScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof InfluencerSubscriptionScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class InfluencerSubscriptionListRelationFilter {
    @Field(() => InfluencerSubscriptionWhereInput, {nullable:true})
    every?: InstanceType<typeof InfluencerSubscriptionWhereInput>;
    @Field(() => InfluencerSubscriptionWhereInput, {nullable:true})
    some?: InstanceType<typeof InfluencerSubscriptionWhereInput>;
    @Field(() => InfluencerSubscriptionWhereInput, {nullable:true})
    none?: InstanceType<typeof InfluencerSubscriptionWhereInput>;
}

@InputType()
export class InfluencerSubscriptionMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    planId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeSubscriptionId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currentPeriodStart?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currentPeriodEnd?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    cancelAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    cancelAtPeriodEnd?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    defaultPaymentMethodId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class InfluencerSubscriptionMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    planId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeSubscriptionId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currentPeriodStart?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currentPeriodEnd?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    cancelAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    cancelAtPeriodEnd?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    defaultPaymentMethodId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class InfluencerSubscriptionNullableScalarRelationFilter {
    @Field(() => InfluencerSubscriptionWhereInput, {nullable:true})
    is?: InstanceType<typeof InfluencerSubscriptionWhereInput>;
    @Field(() => InfluencerSubscriptionWhereInput, {nullable:true})
    isNot?: InstanceType<typeof InfluencerSubscriptionWhereInput>;
}

@InputType()
export class InfluencerSubscriptionOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class InfluencerSubscriptionOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    planId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeSubscriptionId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currentPeriodStart?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currentPeriodEnd?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    cancelAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    cancelAtPeriodEnd?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    defaultPaymentMethodId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => InfluencerSubscriptionCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof InfluencerSubscriptionCountOrderByAggregateInput>;
    @Field(() => InfluencerSubscriptionMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof InfluencerSubscriptionMaxOrderByAggregateInput>;
    @Field(() => InfluencerSubscriptionMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof InfluencerSubscriptionMinOrderByAggregateInput>;
}

@InputType()
export class InfluencerSubscriptionOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    planId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeSubscriptionId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currentPeriodStart?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    currentPeriodEnd?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    cancelAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    cancelAtPeriodEnd?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    defaultPaymentMethodId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => InfluencerOrderByWithRelationInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerOrderByWithRelationInput>;
    @Field(() => InflucenerPlanOrderByWithRelationInput, {nullable:true})
    plan?: InstanceType<typeof InflucenerPlanOrderByWithRelationInput>;
    @Field(() => InfluencerPaymentOrderByRelationAggregateInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentOrderByRelationAggregateInput>;
}

@InputType()
export class InfluencerSubscriptionScalarWhereWithAggregatesInput {
    @Field(() => [InfluencerSubscriptionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<InfluencerSubscriptionScalarWhereWithAggregatesInput>;
    @Field(() => [InfluencerSubscriptionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<InfluencerSubscriptionScalarWhereWithAggregatesInput>;
    @Field(() => [InfluencerSubscriptionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<InfluencerSubscriptionScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    planId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    stripeSubscriptionId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => EnumSubscriptionStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumSubscriptionStatusWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    currentPeriodStart?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    currentPeriodEnd?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    cancelAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    cancelAtPeriodEnd?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    defaultPaymentMethodId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class InfluencerSubscriptionScalarWhereInput {
    @Field(() => [InfluencerSubscriptionScalarWhereInput], {nullable:true})
    AND?: Array<InfluencerSubscriptionScalarWhereInput>;
    @Field(() => [InfluencerSubscriptionScalarWhereInput], {nullable:true})
    OR?: Array<InfluencerSubscriptionScalarWhereInput>;
    @Field(() => [InfluencerSubscriptionScalarWhereInput], {nullable:true})
    NOT?: Array<InfluencerSubscriptionScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    planId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    stripeSubscriptionId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumSubscriptionStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumSubscriptionStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    currentPeriodStart?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    currentPeriodEnd?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    cancelAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    cancelAtPeriodEnd?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    active?: InstanceType<typeof BoolFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    defaultPaymentMethodId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class InfluencerSubscriptionUncheckedCreateNestedManyWithoutInfluencerInput {
    @Field(() => [InfluencerSubscriptionCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerSubscriptionCreateWithoutInfluencerInput)
    create?: Array<InfluencerSubscriptionCreateWithoutInfluencerInput>;
    @Field(() => [InfluencerSubscriptionCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerSubscriptionCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<InfluencerSubscriptionCreateOrConnectWithoutInfluencerInput>;
    @Field(() => InfluencerSubscriptionCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => InfluencerSubscriptionCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof InfluencerSubscriptionCreateManyInfluencerInputEnvelope>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
}

@InputType()
export class InfluencerSubscriptionUncheckedCreateNestedManyWithoutPlanInput {
    @Field(() => [InfluencerSubscriptionCreateWithoutPlanInput], {nullable:true})
    @Type(() => InfluencerSubscriptionCreateWithoutPlanInput)
    create?: Array<InfluencerSubscriptionCreateWithoutPlanInput>;
    @Field(() => [InfluencerSubscriptionCreateOrConnectWithoutPlanInput], {nullable:true})
    @Type(() => InfluencerSubscriptionCreateOrConnectWithoutPlanInput)
    connectOrCreate?: Array<InfluencerSubscriptionCreateOrConnectWithoutPlanInput>;
    @Field(() => InfluencerSubscriptionCreateManyPlanInputEnvelope, {nullable:true})
    @Type(() => InfluencerSubscriptionCreateManyPlanInputEnvelope)
    createMany?: InstanceType<typeof InfluencerSubscriptionCreateManyPlanInputEnvelope>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
}

@InputType()
export class InfluencerSubscriptionUncheckedCreateWithoutInfluencerPaymentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => String, {nullable:false})
    planId!: string;
    @Field(() => String, {nullable:true})
    stripeSubscriptionId?: string;
    @Field(() => SubscriptionStatus, {nullable:false})
    status!: `${SubscriptionStatus}`;
    @Field(() => Date, {nullable:false})
    currentPeriodStart!: Date | string;
    @Field(() => Date, {nullable:false})
    currentPeriodEnd!: Date | string;
    @Field(() => Date, {nullable:true})
    cancelAt?: Date | string;
    @Field(() => Boolean, {nullable:true})
    cancelAtPeriodEnd?: boolean;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => String, {nullable:true})
    defaultPaymentMethodId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class InfluencerSubscriptionUncheckedCreateWithoutInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    planId!: string;
    @Field(() => String, {nullable:true})
    stripeSubscriptionId?: string;
    @Field(() => SubscriptionStatus, {nullable:false})
    status!: `${SubscriptionStatus}`;
    @Field(() => Date, {nullable:false})
    currentPeriodStart!: Date | string;
    @Field(() => Date, {nullable:false})
    currentPeriodEnd!: Date | string;
    @Field(() => Date, {nullable:true})
    cancelAt?: Date | string;
    @Field(() => Boolean, {nullable:true})
    cancelAtPeriodEnd?: boolean;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => String, {nullable:true})
    defaultPaymentMethodId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InfluencerPaymentUncheckedCreateNestedManyWithoutSubscriptionInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedCreateNestedManyWithoutSubscriptionInput>;
}

@InputType()
export class InfluencerSubscriptionUncheckedCreateWithoutPlanInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => String, {nullable:true})
    stripeSubscriptionId?: string;
    @Field(() => SubscriptionStatus, {nullable:false})
    status!: `${SubscriptionStatus}`;
    @Field(() => Date, {nullable:false})
    currentPeriodStart!: Date | string;
    @Field(() => Date, {nullable:false})
    currentPeriodEnd!: Date | string;
    @Field(() => Date, {nullable:true})
    cancelAt?: Date | string;
    @Field(() => Boolean, {nullable:true})
    cancelAtPeriodEnd?: boolean;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => String, {nullable:true})
    defaultPaymentMethodId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InfluencerPaymentUncheckedCreateNestedManyWithoutSubscriptionInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedCreateNestedManyWithoutSubscriptionInput>;
}

@InputType()
export class InfluencerSubscriptionUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => String, {nullable:false})
    planId!: string;
    @Field(() => String, {nullable:true})
    stripeSubscriptionId?: string;
    @Field(() => SubscriptionStatus, {nullable:false})
    status!: `${SubscriptionStatus}`;
    @Field(() => Date, {nullable:false})
    currentPeriodStart!: Date | string;
    @Field(() => Date, {nullable:false})
    currentPeriodEnd!: Date | string;
    @Field(() => Date, {nullable:true})
    cancelAt?: Date | string;
    @Field(() => Boolean, {nullable:true})
    cancelAtPeriodEnd?: boolean;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => String, {nullable:true})
    defaultPaymentMethodId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InfluencerPaymentUncheckedCreateNestedManyWithoutSubscriptionInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedCreateNestedManyWithoutSubscriptionInput>;
}

@InputType()
export class InfluencerSubscriptionUncheckedUpdateManyWithoutInfluencerNestedInput {
    @Field(() => [InfluencerSubscriptionCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerSubscriptionCreateWithoutInfluencerInput)
    create?: Array<InfluencerSubscriptionCreateWithoutInfluencerInput>;
    @Field(() => [InfluencerSubscriptionCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerSubscriptionCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<InfluencerSubscriptionCreateOrConnectWithoutInfluencerInput>;
    @Field(() => [InfluencerSubscriptionUpsertWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerSubscriptionUpsertWithWhereUniqueWithoutInfluencerInput)
    upsert?: Array<InfluencerSubscriptionUpsertWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => InfluencerSubscriptionCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => InfluencerSubscriptionCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof InfluencerSubscriptionCreateManyInfluencerInputEnvelope>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
    @Field(() => [InfluencerSubscriptionUpdateWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerSubscriptionUpdateWithWhereUniqueWithoutInfluencerInput)
    update?: Array<InfluencerSubscriptionUpdateWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => [InfluencerSubscriptionUpdateManyWithWhereWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerSubscriptionUpdateManyWithWhereWithoutInfluencerInput)
    updateMany?: Array<InfluencerSubscriptionUpdateManyWithWhereWithoutInfluencerInput>;
    @Field(() => [InfluencerSubscriptionScalarWhereInput], {nullable:true})
    @Type(() => InfluencerSubscriptionScalarWhereInput)
    deleteMany?: Array<InfluencerSubscriptionScalarWhereInput>;
}

@InputType()
export class InfluencerSubscriptionUncheckedUpdateManyWithoutInfluencerInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    planId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeSubscriptionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumSubscriptionStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumSubscriptionStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodStart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodEnd?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    cancelAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    cancelAtPeriodEnd?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    defaultPaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerSubscriptionUncheckedUpdateManyWithoutPlanNestedInput {
    @Field(() => [InfluencerSubscriptionCreateWithoutPlanInput], {nullable:true})
    @Type(() => InfluencerSubscriptionCreateWithoutPlanInput)
    create?: Array<InfluencerSubscriptionCreateWithoutPlanInput>;
    @Field(() => [InfluencerSubscriptionCreateOrConnectWithoutPlanInput], {nullable:true})
    @Type(() => InfluencerSubscriptionCreateOrConnectWithoutPlanInput)
    connectOrCreate?: Array<InfluencerSubscriptionCreateOrConnectWithoutPlanInput>;
    @Field(() => [InfluencerSubscriptionUpsertWithWhereUniqueWithoutPlanInput], {nullable:true})
    @Type(() => InfluencerSubscriptionUpsertWithWhereUniqueWithoutPlanInput)
    upsert?: Array<InfluencerSubscriptionUpsertWithWhereUniqueWithoutPlanInput>;
    @Field(() => InfluencerSubscriptionCreateManyPlanInputEnvelope, {nullable:true})
    @Type(() => InfluencerSubscriptionCreateManyPlanInputEnvelope)
    createMany?: InstanceType<typeof InfluencerSubscriptionCreateManyPlanInputEnvelope>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
    @Field(() => [InfluencerSubscriptionUpdateWithWhereUniqueWithoutPlanInput], {nullable:true})
    @Type(() => InfluencerSubscriptionUpdateWithWhereUniqueWithoutPlanInput)
    update?: Array<InfluencerSubscriptionUpdateWithWhereUniqueWithoutPlanInput>;
    @Field(() => [InfluencerSubscriptionUpdateManyWithWhereWithoutPlanInput], {nullable:true})
    @Type(() => InfluencerSubscriptionUpdateManyWithWhereWithoutPlanInput)
    updateMany?: Array<InfluencerSubscriptionUpdateManyWithWhereWithoutPlanInput>;
    @Field(() => [InfluencerSubscriptionScalarWhereInput], {nullable:true})
    @Type(() => InfluencerSubscriptionScalarWhereInput)
    deleteMany?: Array<InfluencerSubscriptionScalarWhereInput>;
}

@InputType()
export class InfluencerSubscriptionUncheckedUpdateManyWithoutPlanInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeSubscriptionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumSubscriptionStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumSubscriptionStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodStart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodEnd?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    cancelAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    cancelAtPeriodEnd?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    defaultPaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerSubscriptionUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    planId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeSubscriptionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumSubscriptionStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumSubscriptionStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodStart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodEnd?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    cancelAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    cancelAtPeriodEnd?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    defaultPaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerSubscriptionUncheckedUpdateWithoutInfluencerPaymentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    planId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeSubscriptionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumSubscriptionStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumSubscriptionStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodStart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodEnd?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    cancelAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    cancelAtPeriodEnd?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    defaultPaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerSubscriptionUncheckedUpdateWithoutInfluencerInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    planId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeSubscriptionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumSubscriptionStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumSubscriptionStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodStart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodEnd?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    cancelAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    cancelAtPeriodEnd?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    defaultPaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InfluencerPaymentUncheckedUpdateManyWithoutSubscriptionNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedUpdateManyWithoutSubscriptionNestedInput>;
}

@InputType()
export class InfluencerSubscriptionUncheckedUpdateWithoutPlanInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeSubscriptionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumSubscriptionStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumSubscriptionStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodStart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodEnd?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    cancelAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    cancelAtPeriodEnd?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    defaultPaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InfluencerPaymentUncheckedUpdateManyWithoutSubscriptionNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedUpdateManyWithoutSubscriptionNestedInput>;
}

@InputType()
export class InfluencerSubscriptionUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    planId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeSubscriptionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumSubscriptionStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumSubscriptionStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodStart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodEnd?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    cancelAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    cancelAtPeriodEnd?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    defaultPaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InfluencerPaymentUncheckedUpdateManyWithoutSubscriptionNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUncheckedUpdateManyWithoutSubscriptionNestedInput>;
}

@InputType()
export class InfluencerSubscriptionUpdateManyMutationInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeSubscriptionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumSubscriptionStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumSubscriptionStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodStart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodEnd?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    cancelAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    cancelAtPeriodEnd?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    defaultPaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class InfluencerSubscriptionUpdateManyWithWhereWithoutInfluencerInput {
    @Field(() => InfluencerSubscriptionScalarWhereInput, {nullable:false})
    @Type(() => InfluencerSubscriptionScalarWhereInput)
    where!: InstanceType<typeof InfluencerSubscriptionScalarWhereInput>;
    @Field(() => InfluencerSubscriptionUpdateManyMutationInput, {nullable:false})
    @Type(() => InfluencerSubscriptionUpdateManyMutationInput)
    data!: InstanceType<typeof InfluencerSubscriptionUpdateManyMutationInput>;
}

@InputType()
export class InfluencerSubscriptionUpdateManyWithWhereWithoutPlanInput {
    @Field(() => InfluencerSubscriptionScalarWhereInput, {nullable:false})
    @Type(() => InfluencerSubscriptionScalarWhereInput)
    where!: InstanceType<typeof InfluencerSubscriptionScalarWhereInput>;
    @Field(() => InfluencerSubscriptionUpdateManyMutationInput, {nullable:false})
    @Type(() => InfluencerSubscriptionUpdateManyMutationInput)
    data!: InstanceType<typeof InfluencerSubscriptionUpdateManyMutationInput>;
}

@InputType()
export class InfluencerSubscriptionUpdateManyWithoutInfluencerNestedInput {
    @Field(() => [InfluencerSubscriptionCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerSubscriptionCreateWithoutInfluencerInput)
    create?: Array<InfluencerSubscriptionCreateWithoutInfluencerInput>;
    @Field(() => [InfluencerSubscriptionCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerSubscriptionCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<InfluencerSubscriptionCreateOrConnectWithoutInfluencerInput>;
    @Field(() => [InfluencerSubscriptionUpsertWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerSubscriptionUpsertWithWhereUniqueWithoutInfluencerInput)
    upsert?: Array<InfluencerSubscriptionUpsertWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => InfluencerSubscriptionCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => InfluencerSubscriptionCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof InfluencerSubscriptionCreateManyInfluencerInputEnvelope>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
    @Field(() => [InfluencerSubscriptionUpdateWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerSubscriptionUpdateWithWhereUniqueWithoutInfluencerInput)
    update?: Array<InfluencerSubscriptionUpdateWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => [InfluencerSubscriptionUpdateManyWithWhereWithoutInfluencerInput], {nullable:true})
    @Type(() => InfluencerSubscriptionUpdateManyWithWhereWithoutInfluencerInput)
    updateMany?: Array<InfluencerSubscriptionUpdateManyWithWhereWithoutInfluencerInput>;
    @Field(() => [InfluencerSubscriptionScalarWhereInput], {nullable:true})
    @Type(() => InfluencerSubscriptionScalarWhereInput)
    deleteMany?: Array<InfluencerSubscriptionScalarWhereInput>;
}

@InputType()
export class InfluencerSubscriptionUpdateManyWithoutPlanNestedInput {
    @Field(() => [InfluencerSubscriptionCreateWithoutPlanInput], {nullable:true})
    @Type(() => InfluencerSubscriptionCreateWithoutPlanInput)
    create?: Array<InfluencerSubscriptionCreateWithoutPlanInput>;
    @Field(() => [InfluencerSubscriptionCreateOrConnectWithoutPlanInput], {nullable:true})
    @Type(() => InfluencerSubscriptionCreateOrConnectWithoutPlanInput)
    connectOrCreate?: Array<InfluencerSubscriptionCreateOrConnectWithoutPlanInput>;
    @Field(() => [InfluencerSubscriptionUpsertWithWhereUniqueWithoutPlanInput], {nullable:true})
    @Type(() => InfluencerSubscriptionUpsertWithWhereUniqueWithoutPlanInput)
    upsert?: Array<InfluencerSubscriptionUpsertWithWhereUniqueWithoutPlanInput>;
    @Field(() => InfluencerSubscriptionCreateManyPlanInputEnvelope, {nullable:true})
    @Type(() => InfluencerSubscriptionCreateManyPlanInputEnvelope)
    createMany?: InstanceType<typeof InfluencerSubscriptionCreateManyPlanInputEnvelope>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
    @Field(() => [InfluencerSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>>;
    @Field(() => [InfluencerSubscriptionUpdateWithWhereUniqueWithoutPlanInput], {nullable:true})
    @Type(() => InfluencerSubscriptionUpdateWithWhereUniqueWithoutPlanInput)
    update?: Array<InfluencerSubscriptionUpdateWithWhereUniqueWithoutPlanInput>;
    @Field(() => [InfluencerSubscriptionUpdateManyWithWhereWithoutPlanInput], {nullable:true})
    @Type(() => InfluencerSubscriptionUpdateManyWithWhereWithoutPlanInput)
    updateMany?: Array<InfluencerSubscriptionUpdateManyWithWhereWithoutPlanInput>;
    @Field(() => [InfluencerSubscriptionScalarWhereInput], {nullable:true})
    @Type(() => InfluencerSubscriptionScalarWhereInput)
    deleteMany?: Array<InfluencerSubscriptionScalarWhereInput>;
}

@InputType()
export class InfluencerSubscriptionUpdateOneWithoutInfluencerPaymentsNestedInput {
    @Field(() => InfluencerSubscriptionCreateWithoutInfluencerPaymentsInput, {nullable:true})
    @Type(() => InfluencerSubscriptionCreateWithoutInfluencerPaymentsInput)
    create?: InstanceType<typeof InfluencerSubscriptionCreateWithoutInfluencerPaymentsInput>;
    @Field(() => InfluencerSubscriptionCreateOrConnectWithoutInfluencerPaymentsInput, {nullable:true})
    @Type(() => InfluencerSubscriptionCreateOrConnectWithoutInfluencerPaymentsInput)
    connectOrCreate?: InstanceType<typeof InfluencerSubscriptionCreateOrConnectWithoutInfluencerPaymentsInput>;
    @Field(() => InfluencerSubscriptionUpsertWithoutInfluencerPaymentsInput, {nullable:true})
    @Type(() => InfluencerSubscriptionUpsertWithoutInfluencerPaymentsInput)
    upsert?: InstanceType<typeof InfluencerSubscriptionUpsertWithoutInfluencerPaymentsInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => InfluencerSubscriptionWhereInput, {nullable:true})
    @Type(() => InfluencerSubscriptionWhereInput)
    delete?: InstanceType<typeof InfluencerSubscriptionWhereInput>;
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:true})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    connect?: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
    @Field(() => InfluencerSubscriptionUpdateToOneWithWhereWithoutInfluencerPaymentsInput, {nullable:true})
    @Type(() => InfluencerSubscriptionUpdateToOneWithWhereWithoutInfluencerPaymentsInput)
    update?: InstanceType<typeof InfluencerSubscriptionUpdateToOneWithWhereWithoutInfluencerPaymentsInput>;
}

@InputType()
export class InfluencerSubscriptionUpdateToOneWithWhereWithoutInfluencerPaymentsInput {
    @Field(() => InfluencerSubscriptionWhereInput, {nullable:true})
    @Type(() => InfluencerSubscriptionWhereInput)
    where?: InstanceType<typeof InfluencerSubscriptionWhereInput>;
    @Field(() => InfluencerSubscriptionUpdateWithoutInfluencerPaymentsInput, {nullable:false})
    @Type(() => InfluencerSubscriptionUpdateWithoutInfluencerPaymentsInput)
    data!: InstanceType<typeof InfluencerSubscriptionUpdateWithoutInfluencerPaymentsInput>;
}

@InputType()
export class InfluencerSubscriptionUpdateWithWhereUniqueWithoutInfluencerInput {
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
    @Field(() => InfluencerSubscriptionUpdateWithoutInfluencerInput, {nullable:false})
    @Type(() => InfluencerSubscriptionUpdateWithoutInfluencerInput)
    data!: InstanceType<typeof InfluencerSubscriptionUpdateWithoutInfluencerInput>;
}

@InputType()
export class InfluencerSubscriptionUpdateWithWhereUniqueWithoutPlanInput {
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
    @Field(() => InfluencerSubscriptionUpdateWithoutPlanInput, {nullable:false})
    @Type(() => InfluencerSubscriptionUpdateWithoutPlanInput)
    data!: InstanceType<typeof InfluencerSubscriptionUpdateWithoutPlanInput>;
}

@InputType()
export class InfluencerSubscriptionUpdateWithoutInfluencerPaymentsInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeSubscriptionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumSubscriptionStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumSubscriptionStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodStart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodEnd?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    cancelAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    cancelAtPeriodEnd?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    defaultPaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InfluencerUpdateOneRequiredWithoutInfluencerSubscriptionsNestedInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerUpdateOneRequiredWithoutInfluencerSubscriptionsNestedInput>;
    @Field(() => InflucenerPlanUpdateOneRequiredWithoutInfluencerSubscriptionsNestedInput, {nullable:true})
    plan?: InstanceType<typeof InflucenerPlanUpdateOneRequiredWithoutInfluencerSubscriptionsNestedInput>;
}

@InputType()
export class InfluencerSubscriptionUpdateWithoutInfluencerInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeSubscriptionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumSubscriptionStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumSubscriptionStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodStart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodEnd?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    cancelAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    cancelAtPeriodEnd?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    defaultPaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InflucenerPlanUpdateOneRequiredWithoutInfluencerSubscriptionsNestedInput, {nullable:true})
    plan?: InstanceType<typeof InflucenerPlanUpdateOneRequiredWithoutInfluencerSubscriptionsNestedInput>;
    @Field(() => InfluencerPaymentUpdateManyWithoutSubscriptionNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUpdateManyWithoutSubscriptionNestedInput>;
}

@InputType()
export class InfluencerSubscriptionUpdateWithoutPlanInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeSubscriptionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumSubscriptionStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumSubscriptionStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodStart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodEnd?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    cancelAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    cancelAtPeriodEnd?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    defaultPaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InfluencerUpdateOneRequiredWithoutInfluencerSubscriptionsNestedInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerUpdateOneRequiredWithoutInfluencerSubscriptionsNestedInput>;
    @Field(() => InfluencerPaymentUpdateManyWithoutSubscriptionNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUpdateManyWithoutSubscriptionNestedInput>;
}

@InputType()
export class InfluencerSubscriptionUpdateInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeSubscriptionId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumSubscriptionStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumSubscriptionStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodStart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    currentPeriodEnd?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    cancelAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    cancelAtPeriodEnd?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    defaultPaymentMethodId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InfluencerUpdateOneRequiredWithoutInfluencerSubscriptionsNestedInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerUpdateOneRequiredWithoutInfluencerSubscriptionsNestedInput>;
    @Field(() => InflucenerPlanUpdateOneRequiredWithoutInfluencerSubscriptionsNestedInput, {nullable:true})
    plan?: InstanceType<typeof InflucenerPlanUpdateOneRequiredWithoutInfluencerSubscriptionsNestedInput>;
    @Field(() => InfluencerPaymentUpdateManyWithoutSubscriptionNestedInput, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentUpdateManyWithoutSubscriptionNestedInput>;
}

@InputType()
export class InfluencerSubscriptionUpsertWithWhereUniqueWithoutInfluencerInput {
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
    @Field(() => InfluencerSubscriptionUpdateWithoutInfluencerInput, {nullable:false})
    @Type(() => InfluencerSubscriptionUpdateWithoutInfluencerInput)
    update!: InstanceType<typeof InfluencerSubscriptionUpdateWithoutInfluencerInput>;
    @Field(() => InfluencerSubscriptionCreateWithoutInfluencerInput, {nullable:false})
    @Type(() => InfluencerSubscriptionCreateWithoutInfluencerInput)
    create!: InstanceType<typeof InfluencerSubscriptionCreateWithoutInfluencerInput>;
}

@InputType()
export class InfluencerSubscriptionUpsertWithWhereUniqueWithoutPlanInput {
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
    @Field(() => InfluencerSubscriptionUpdateWithoutPlanInput, {nullable:false})
    @Type(() => InfluencerSubscriptionUpdateWithoutPlanInput)
    update!: InstanceType<typeof InfluencerSubscriptionUpdateWithoutPlanInput>;
    @Field(() => InfluencerSubscriptionCreateWithoutPlanInput, {nullable:false})
    @Type(() => InfluencerSubscriptionCreateWithoutPlanInput)
    create!: InstanceType<typeof InfluencerSubscriptionCreateWithoutPlanInput>;
}

@InputType()
export class InfluencerSubscriptionUpsertWithoutInfluencerPaymentsInput {
    @Field(() => InfluencerSubscriptionUpdateWithoutInfluencerPaymentsInput, {nullable:false})
    @Type(() => InfluencerSubscriptionUpdateWithoutInfluencerPaymentsInput)
    update!: InstanceType<typeof InfluencerSubscriptionUpdateWithoutInfluencerPaymentsInput>;
    @Field(() => InfluencerSubscriptionCreateWithoutInfluencerPaymentsInput, {nullable:false})
    @Type(() => InfluencerSubscriptionCreateWithoutInfluencerPaymentsInput)
    create!: InstanceType<typeof InfluencerSubscriptionCreateWithoutInfluencerPaymentsInput>;
    @Field(() => InfluencerSubscriptionWhereInput, {nullable:true})
    @Type(() => InfluencerSubscriptionWhereInput)
    where?: InstanceType<typeof InfluencerSubscriptionWhereInput>;
}

@InputType()
export class InfluencerSubscriptionWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    stripeSubscriptionId?: string;
    @Field(() => [InfluencerSubscriptionWhereInput], {nullable:true})
    AND?: Array<InfluencerSubscriptionWhereInput>;
    @Field(() => [InfluencerSubscriptionWhereInput], {nullable:true})
    OR?: Array<InfluencerSubscriptionWhereInput>;
    @Field(() => [InfluencerSubscriptionWhereInput], {nullable:true})
    NOT?: Array<InfluencerSubscriptionWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    planId?: InstanceType<typeof StringFilter>;
    @Field(() => EnumSubscriptionStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumSubscriptionStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    currentPeriodStart?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    currentPeriodEnd?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    cancelAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    cancelAtPeriodEnd?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    active?: InstanceType<typeof BoolFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    defaultPaymentMethodId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => InfluencerScalarRelationFilter, {nullable:true})
    influencer?: InstanceType<typeof InfluencerScalarRelationFilter>;
    @Field(() => InflucenerPlanScalarRelationFilter, {nullable:true})
    plan?: InstanceType<typeof InflucenerPlanScalarRelationFilter>;
    @Field(() => InfluencerPaymentListRelationFilter, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentListRelationFilter>;
}

@InputType()
export class InfluencerSubscriptionWhereInput {
    @Field(() => [InfluencerSubscriptionWhereInput], {nullable:true})
    AND?: Array<InfluencerSubscriptionWhereInput>;
    @Field(() => [InfluencerSubscriptionWhereInput], {nullable:true})
    OR?: Array<InfluencerSubscriptionWhereInput>;
    @Field(() => [InfluencerSubscriptionWhereInput], {nullable:true})
    NOT?: Array<InfluencerSubscriptionWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    planId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    stripeSubscriptionId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumSubscriptionStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumSubscriptionStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    currentPeriodStart?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    currentPeriodEnd?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    cancelAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    cancelAtPeriodEnd?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    active?: InstanceType<typeof BoolFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    defaultPaymentMethodId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => InfluencerScalarRelationFilter, {nullable:true})
    influencer?: InstanceType<typeof InfluencerScalarRelationFilter>;
    @Field(() => InflucenerPlanScalarRelationFilter, {nullable:true})
    plan?: InstanceType<typeof InflucenerPlanScalarRelationFilter>;
    @Field(() => InfluencerPaymentListRelationFilter, {nullable:true})
    influencerPayments?: InstanceType<typeof InfluencerPaymentListRelationFilter>;
}

@ObjectType()
export class InfluencerSubscription {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => String, {nullable:false})
    planId!: string;
    @Field(() => String, {nullable:true})
    stripeSubscriptionId!: string | null;
    @Field(() => SubscriptionStatus, {nullable:false})
    status!: `${SubscriptionStatus}`;
    @Field(() => Date, {nullable:false})
    currentPeriodStart!: Date;
    @Field(() => Date, {nullable:false})
    currentPeriodEnd!: Date;
    @Field(() => Date, {nullable:true})
    cancelAt!: Date | null;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    cancelAtPeriodEnd!: boolean;
    @Field(() => Boolean, {defaultValue:true,nullable:false})
    active!: boolean;
    @Field(() => String, {nullable:true})
    defaultPaymentMethodId!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Influencer, {nullable:false})
    influencer?: InstanceType<typeof Influencer>;
    @Field(() => InflucenerPlan, {nullable:false})
    plan?: InstanceType<typeof InflucenerPlan>;
    @Field(() => [InfluencerPayment], {nullable:true})
    influencerPayments?: Array<InfluencerPayment>;
}

@ArgsType()
export class UpdateManyInfluencerSubscriptionArgs {
    @Field(() => InfluencerSubscriptionUpdateManyMutationInput, {nullable:false})
    @Type(() => InfluencerSubscriptionUpdateManyMutationInput)
    data!: InstanceType<typeof InfluencerSubscriptionUpdateManyMutationInput>;
    @Field(() => InfluencerSubscriptionWhereInput, {nullable:true})
    @Type(() => InfluencerSubscriptionWhereInput)
    where?: InstanceType<typeof InfluencerSubscriptionWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneInfluencerSubscriptionArgs {
    @Field(() => InfluencerSubscriptionUpdateInput, {nullable:false})
    @Type(() => InfluencerSubscriptionUpdateInput)
    data!: InstanceType<typeof InfluencerSubscriptionUpdateInput>;
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
}

@ArgsType()
export class UpsertOneInfluencerSubscriptionArgs {
    @Field(() => InfluencerSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerSubscriptionWhereUniqueInput, 'id' | 'stripeSubscriptionId'>;
    @Field(() => InfluencerSubscriptionCreateInput, {nullable:false})
    @Type(() => InfluencerSubscriptionCreateInput)
    create!: InstanceType<typeof InfluencerSubscriptionCreateInput>;
    @Field(() => InfluencerSubscriptionUpdateInput, {nullable:false})
    @Type(() => InfluencerSubscriptionUpdateInput)
    update!: InstanceType<typeof InfluencerSubscriptionUpdateInput>;
}

@ArgsType()
export class CreateManyMediaArgs {
    @Field(() => [MediaCreateManyInput], {nullable:false})
    @Type(() => MediaCreateManyInput)
    data!: Array<MediaCreateManyInput>;
}

@ArgsType()
export class CreateOneMediaArgs {
    @Field(() => MediaCreateInput, {nullable:false})
    @Type(() => MediaCreateInput)
    data!: InstanceType<typeof MediaCreateInput>;
}

@ArgsType()
export class DeleteManyMediaArgs {
    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: InstanceType<typeof MediaWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneMediaArgs {
    @Field(() => MediaWhereUniqueInput, {nullable:false})
    @Type(() => MediaWhereUniqueInput)
    where!: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstMediaOrThrowArgs {
    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: InstanceType<typeof MediaWhereInput>;
    @Field(() => [MediaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MediaOrderByWithRelationInput>;
    @Field(() => MediaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MediaScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MediaScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstMediaArgs {
    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: InstanceType<typeof MediaWhereInput>;
    @Field(() => [MediaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MediaOrderByWithRelationInput>;
    @Field(() => MediaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MediaScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MediaScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyMediaArgs {
    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: InstanceType<typeof MediaWhereInput>;
    @Field(() => [MediaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MediaOrderByWithRelationInput>;
    @Field(() => MediaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MediaScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MediaScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueMediaOrThrowArgs {
    @Field(() => MediaWhereUniqueInput, {nullable:false})
    @Type(() => MediaWhereUniqueInput)
    where!: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueMediaArgs {
    @Field(() => MediaWhereUniqueInput, {nullable:false})
    @Type(() => MediaWhereUniqueInput)
    where!: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
}

@ArgsType()
export class MediaAggregateArgs {
    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: InstanceType<typeof MediaWhereInput>;
    @Field(() => [MediaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MediaOrderByWithRelationInput>;
    @Field(() => MediaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class MediaCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    key?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    privacy?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class MediaCreateManyInfluencerInputEnvelope {
    @Field(() => [MediaCreateManyInfluencerInput], {nullable:false})
    @Type(() => MediaCreateManyInfluencerInput)
    data!: Array<MediaCreateManyInfluencerInput>;
}

@InputType()
export class MediaCreateManyInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    key!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
    @Field(() => MediaPrivacy, {nullable:true})
    privacy?: `${MediaPrivacy}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MediaCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    key!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => MediaPrivacy, {nullable:true})
    privacy?: `${MediaPrivacy}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MediaCreateNestedManyWithoutInfluencerInput {
    @Field(() => [MediaCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => MediaCreateWithoutInfluencerInput)
    create?: Array<MediaCreateWithoutInfluencerInput>;
    @Field(() => [MediaCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => MediaCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<MediaCreateOrConnectWithoutInfluencerInput>;
    @Field(() => MediaCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => MediaCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof MediaCreateManyInfluencerInputEnvelope>;
    @Field(() => [MediaWhereUniqueInput], {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MediaWhereUniqueInput, 'id'>>;
}

@InputType()
export class MediaCreateNestedOneWithoutProductsInput {
    @Field(() => MediaCreateWithoutProductsInput, {nullable:true})
    @Type(() => MediaCreateWithoutProductsInput)
    create?: InstanceType<typeof MediaCreateWithoutProductsInput>;
    @Field(() => MediaCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => MediaCreateOrConnectWithoutProductsInput)
    connectOrCreate?: InstanceType<typeof MediaCreateOrConnectWithoutProductsInput>;
    @Field(() => MediaWhereUniqueInput, {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    connect?: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
}

@InputType()
export class MediaCreateOrConnectWithoutInfluencerInput {
    @Field(() => MediaWhereUniqueInput, {nullable:false})
    @Type(() => MediaWhereUniqueInput)
    where!: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
    @Field(() => MediaCreateWithoutInfluencerInput, {nullable:false})
    @Type(() => MediaCreateWithoutInfluencerInput)
    create!: InstanceType<typeof MediaCreateWithoutInfluencerInput>;
}

@InputType()
export class MediaCreateOrConnectWithoutProductsInput {
    @Field(() => MediaWhereUniqueInput, {nullable:false})
    @Type(() => MediaWhereUniqueInput)
    where!: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
    @Field(() => MediaCreateWithoutProductsInput, {nullable:false})
    @Type(() => MediaCreateWithoutProductsInput)
    create!: InstanceType<typeof MediaCreateWithoutProductsInput>;
}

@InputType()
export class MediaCreateWithoutInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    key!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
    @Field(() => MediaPrivacy, {nullable:true})
    privacy?: `${MediaPrivacy}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedManyWithoutMediaInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutMediaInput>;
}

@InputType()
export class MediaCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    key!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
    @Field(() => MediaPrivacy, {nullable:true})
    privacy?: `${MediaPrivacy}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InfluencerCreateNestedOneWithoutMediaInput, {nullable:false})
    influencer!: InstanceType<typeof InfluencerCreateNestedOneWithoutMediaInput>;
}

@InputType()
export class MediaCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    key!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
    @Field(() => MediaPrivacy, {nullable:true})
    privacy?: `${MediaPrivacy}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InfluencerCreateNestedOneWithoutMediaInput, {nullable:false})
    influencer!: InstanceType<typeof InfluencerCreateNestedOneWithoutMediaInput>;
    @Field(() => ProductCreateNestedManyWithoutMediaInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutMediaInput>;
}

@ArgsType()
export class MediaGroupByArgs {
    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: InstanceType<typeof MediaWhereInput>;
    @Field(() => [MediaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MediaOrderByWithAggregationInput>;
    @Field(() => [MediaScalarFieldEnum], {nullable:false})
    by!: Array<`${MediaScalarFieldEnum}`>;
    @Field(() => MediaScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof MediaScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class MediaListRelationFilter {
    @Field(() => MediaWhereInput, {nullable:true})
    every?: InstanceType<typeof MediaWhereInput>;
    @Field(() => MediaWhereInput, {nullable:true})
    some?: InstanceType<typeof MediaWhereInput>;
    @Field(() => MediaWhereInput, {nullable:true})
    none?: InstanceType<typeof MediaWhereInput>;
}

@InputType()
export class MediaMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    key?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    privacy?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class MediaMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    key?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    privacy?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class MediaNullableScalarRelationFilter {
    @Field(() => MediaWhereInput, {nullable:true})
    is?: InstanceType<typeof MediaWhereInput>;
    @Field(() => MediaWhereInput, {nullable:true})
    isNot?: InstanceType<typeof MediaWhereInput>;
}

@InputType()
export class MediaOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class MediaOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    key?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    privacy?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => MediaCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MediaCountOrderByAggregateInput>;
    @Field(() => MediaMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MediaMaxOrderByAggregateInput>;
    @Field(() => MediaMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MediaMinOrderByAggregateInput>;
}

@InputType()
export class MediaOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    key?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    privacy?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => InfluencerOrderByWithRelationInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerOrderByWithRelationInput>;
    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: InstanceType<typeof ProductOrderByRelationAggregateInput>;
}

@InputType()
export class MediaScalarWhereWithAggregatesInput {
    @Field(() => [MediaScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MediaScalarWhereWithAggregatesInput>;
    @Field(() => [MediaScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MediaScalarWhereWithAggregatesInput>;
    @Field(() => [MediaScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MediaScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    key?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumMediaTypeWithAggregatesFilter, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumMediaPrivacyWithAggregatesFilter, {nullable:true})
    privacy?: InstanceType<typeof EnumMediaPrivacyWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class MediaScalarWhereInput {
    @Field(() => [MediaScalarWhereInput], {nullable:true})
    AND?: Array<MediaScalarWhereInput>;
    @Field(() => [MediaScalarWhereInput], {nullable:true})
    OR?: Array<MediaScalarWhereInput>;
    @Field(() => [MediaScalarWhereInput], {nullable:true})
    NOT?: Array<MediaScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    key?: InstanceType<typeof StringFilter>;
    @Field(() => EnumMediaTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFilter>;
    @Field(() => StringFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringFilter>;
    @Field(() => EnumMediaPrivacyFilter, {nullable:true})
    privacy?: InstanceType<typeof EnumMediaPrivacyFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class MediaUncheckedCreateNestedManyWithoutInfluencerInput {
    @Field(() => [MediaCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => MediaCreateWithoutInfluencerInput)
    create?: Array<MediaCreateWithoutInfluencerInput>;
    @Field(() => [MediaCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => MediaCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<MediaCreateOrConnectWithoutInfluencerInput>;
    @Field(() => MediaCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => MediaCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof MediaCreateManyInfluencerInputEnvelope>;
    @Field(() => [MediaWhereUniqueInput], {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MediaWhereUniqueInput, 'id'>>;
}

@InputType()
export class MediaUncheckedCreateWithoutInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    key!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
    @Field(() => MediaPrivacy, {nullable:true})
    privacy?: `${MediaPrivacy}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutMediaInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutMediaInput>;
}

@InputType()
export class MediaUncheckedCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    key!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => MediaPrivacy, {nullable:true})
    privacy?: `${MediaPrivacy}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MediaUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    key!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => MediaPrivacy, {nullable:true})
    privacy?: `${MediaPrivacy}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutMediaInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutMediaInput>;
}

@InputType()
export class MediaUncheckedUpdateManyWithoutInfluencerNestedInput {
    @Field(() => [MediaCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => MediaCreateWithoutInfluencerInput)
    create?: Array<MediaCreateWithoutInfluencerInput>;
    @Field(() => [MediaCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => MediaCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<MediaCreateOrConnectWithoutInfluencerInput>;
    @Field(() => [MediaUpsertWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => MediaUpsertWithWhereUniqueWithoutInfluencerInput)
    upsert?: Array<MediaUpsertWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => MediaCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => MediaCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof MediaCreateManyInfluencerInputEnvelope>;
    @Field(() => [MediaWhereUniqueInput], {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MediaWhereUniqueInput, 'id'>>;
    @Field(() => [MediaWhereUniqueInput], {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MediaWhereUniqueInput, 'id'>>;
    @Field(() => [MediaWhereUniqueInput], {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MediaWhereUniqueInput, 'id'>>;
    @Field(() => [MediaWhereUniqueInput], {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MediaWhereUniqueInput, 'id'>>;
    @Field(() => [MediaUpdateWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => MediaUpdateWithWhereUniqueWithoutInfluencerInput)
    update?: Array<MediaUpdateWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => [MediaUpdateManyWithWhereWithoutInfluencerInput], {nullable:true})
    @Type(() => MediaUpdateManyWithWhereWithoutInfluencerInput)
    updateMany?: Array<MediaUpdateManyWithWhereWithoutInfluencerInput>;
    @Field(() => [MediaScalarWhereInput], {nullable:true})
    @Type(() => MediaScalarWhereInput)
    deleteMany?: Array<MediaScalarWhereInput>;
}

@InputType()
export class MediaUncheckedUpdateManyWithoutInfluencerInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
    @Field(() => EnumMediaPrivacyFieldUpdateOperationsInput, {nullable:true})
    privacy?: InstanceType<typeof EnumMediaPrivacyFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MediaUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaPrivacyFieldUpdateOperationsInput, {nullable:true})
    privacy?: InstanceType<typeof EnumMediaPrivacyFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MediaUncheckedUpdateWithoutInfluencerInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
    @Field(() => EnumMediaPrivacyFieldUpdateOperationsInput, {nullable:true})
    privacy?: InstanceType<typeof EnumMediaPrivacyFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutMediaNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutMediaNestedInput>;
}

@InputType()
export class MediaUncheckedUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaPrivacyFieldUpdateOperationsInput, {nullable:true})
    privacy?: InstanceType<typeof EnumMediaPrivacyFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MediaUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaPrivacyFieldUpdateOperationsInput, {nullable:true})
    privacy?: InstanceType<typeof EnumMediaPrivacyFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutMediaNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutMediaNestedInput>;
}

@InputType()
export class MediaUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
    @Field(() => EnumMediaPrivacyFieldUpdateOperationsInput, {nullable:true})
    privacy?: InstanceType<typeof EnumMediaPrivacyFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MediaUpdateManyWithWhereWithoutInfluencerInput {
    @Field(() => MediaScalarWhereInput, {nullable:false})
    @Type(() => MediaScalarWhereInput)
    where!: InstanceType<typeof MediaScalarWhereInput>;
    @Field(() => MediaUpdateManyMutationInput, {nullable:false})
    @Type(() => MediaUpdateManyMutationInput)
    data!: InstanceType<typeof MediaUpdateManyMutationInput>;
}

@InputType()
export class MediaUpdateManyWithoutInfluencerNestedInput {
    @Field(() => [MediaCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => MediaCreateWithoutInfluencerInput)
    create?: Array<MediaCreateWithoutInfluencerInput>;
    @Field(() => [MediaCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => MediaCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<MediaCreateOrConnectWithoutInfluencerInput>;
    @Field(() => [MediaUpsertWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => MediaUpsertWithWhereUniqueWithoutInfluencerInput)
    upsert?: Array<MediaUpsertWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => MediaCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => MediaCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof MediaCreateManyInfluencerInputEnvelope>;
    @Field(() => [MediaWhereUniqueInput], {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MediaWhereUniqueInput, 'id'>>;
    @Field(() => [MediaWhereUniqueInput], {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MediaWhereUniqueInput, 'id'>>;
    @Field(() => [MediaWhereUniqueInput], {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MediaWhereUniqueInput, 'id'>>;
    @Field(() => [MediaWhereUniqueInput], {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MediaWhereUniqueInput, 'id'>>;
    @Field(() => [MediaUpdateWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => MediaUpdateWithWhereUniqueWithoutInfluencerInput)
    update?: Array<MediaUpdateWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => [MediaUpdateManyWithWhereWithoutInfluencerInput], {nullable:true})
    @Type(() => MediaUpdateManyWithWhereWithoutInfluencerInput)
    updateMany?: Array<MediaUpdateManyWithWhereWithoutInfluencerInput>;
    @Field(() => [MediaScalarWhereInput], {nullable:true})
    @Type(() => MediaScalarWhereInput)
    deleteMany?: Array<MediaScalarWhereInput>;
}

@InputType()
export class MediaUpdateOneWithoutProductsNestedInput {
    @Field(() => MediaCreateWithoutProductsInput, {nullable:true})
    @Type(() => MediaCreateWithoutProductsInput)
    create?: InstanceType<typeof MediaCreateWithoutProductsInput>;
    @Field(() => MediaCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => MediaCreateOrConnectWithoutProductsInput)
    connectOrCreate?: InstanceType<typeof MediaCreateOrConnectWithoutProductsInput>;
    @Field(() => MediaUpsertWithoutProductsInput, {nullable:true})
    @Type(() => MediaUpsertWithoutProductsInput)
    upsert?: InstanceType<typeof MediaUpsertWithoutProductsInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    delete?: InstanceType<typeof MediaWhereInput>;
    @Field(() => MediaWhereUniqueInput, {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    connect?: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
    @Field(() => MediaUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => MediaUpdateToOneWithWhereWithoutProductsInput)
    update?: InstanceType<typeof MediaUpdateToOneWithWhereWithoutProductsInput>;
}

@InputType()
export class MediaUpdateToOneWithWhereWithoutProductsInput {
    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: InstanceType<typeof MediaWhereInput>;
    @Field(() => MediaUpdateWithoutProductsInput, {nullable:false})
    @Type(() => MediaUpdateWithoutProductsInput)
    data!: InstanceType<typeof MediaUpdateWithoutProductsInput>;
}

@InputType()
export class MediaUpdateWithWhereUniqueWithoutInfluencerInput {
    @Field(() => MediaWhereUniqueInput, {nullable:false})
    @Type(() => MediaWhereUniqueInput)
    where!: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
    @Field(() => MediaUpdateWithoutInfluencerInput, {nullable:false})
    @Type(() => MediaUpdateWithoutInfluencerInput)
    data!: InstanceType<typeof MediaUpdateWithoutInfluencerInput>;
}

@InputType()
export class MediaUpdateWithoutInfluencerInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
    @Field(() => EnumMediaPrivacyFieldUpdateOperationsInput, {nullable:true})
    privacy?: InstanceType<typeof EnumMediaPrivacyFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateManyWithoutMediaNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutMediaNestedInput>;
}

@InputType()
export class MediaUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
    @Field(() => EnumMediaPrivacyFieldUpdateOperationsInput, {nullable:true})
    privacy?: InstanceType<typeof EnumMediaPrivacyFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InfluencerUpdateOneRequiredWithoutMediaNestedInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerUpdateOneRequiredWithoutMediaNestedInput>;
}

@InputType()
export class MediaUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    key?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
    @Field(() => EnumMediaPrivacyFieldUpdateOperationsInput, {nullable:true})
    privacy?: InstanceType<typeof EnumMediaPrivacyFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InfluencerUpdateOneRequiredWithoutMediaNestedInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerUpdateOneRequiredWithoutMediaNestedInput>;
    @Field(() => ProductUpdateManyWithoutMediaNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutMediaNestedInput>;
}

@InputType()
export class MediaUpsertWithWhereUniqueWithoutInfluencerInput {
    @Field(() => MediaWhereUniqueInput, {nullable:false})
    @Type(() => MediaWhereUniqueInput)
    where!: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
    @Field(() => MediaUpdateWithoutInfluencerInput, {nullable:false})
    @Type(() => MediaUpdateWithoutInfluencerInput)
    update!: InstanceType<typeof MediaUpdateWithoutInfluencerInput>;
    @Field(() => MediaCreateWithoutInfluencerInput, {nullable:false})
    @Type(() => MediaCreateWithoutInfluencerInput)
    create!: InstanceType<typeof MediaCreateWithoutInfluencerInput>;
}

@InputType()
export class MediaUpsertWithoutProductsInput {
    @Field(() => MediaUpdateWithoutProductsInput, {nullable:false})
    @Type(() => MediaUpdateWithoutProductsInput)
    update!: InstanceType<typeof MediaUpdateWithoutProductsInput>;
    @Field(() => MediaCreateWithoutProductsInput, {nullable:false})
    @Type(() => MediaCreateWithoutProductsInput)
    create!: InstanceType<typeof MediaCreateWithoutProductsInput>;
    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: InstanceType<typeof MediaWhereInput>;
}

@InputType()
export class MediaWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [MediaWhereInput], {nullable:true})
    AND?: Array<MediaWhereInput>;
    @Field(() => [MediaWhereInput], {nullable:true})
    OR?: Array<MediaWhereInput>;
    @Field(() => [MediaWhereInput], {nullable:true})
    NOT?: Array<MediaWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    key?: InstanceType<typeof StringFilter>;
    @Field(() => EnumMediaTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFilter>;
    @Field(() => StringFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringFilter>;
    @Field(() => EnumMediaPrivacyFilter, {nullable:true})
    privacy?: InstanceType<typeof EnumMediaPrivacyFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => InfluencerScalarRelationFilter, {nullable:true})
    influencer?: InstanceType<typeof InfluencerScalarRelationFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
}

@InputType()
export class MediaWhereInput {
    @Field(() => [MediaWhereInput], {nullable:true})
    AND?: Array<MediaWhereInput>;
    @Field(() => [MediaWhereInput], {nullable:true})
    OR?: Array<MediaWhereInput>;
    @Field(() => [MediaWhereInput], {nullable:true})
    NOT?: Array<MediaWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    key?: InstanceType<typeof StringFilter>;
    @Field(() => EnumMediaTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFilter>;
    @Field(() => StringFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringFilter>;
    @Field(() => EnumMediaPrivacyFilter, {nullable:true})
    privacy?: InstanceType<typeof EnumMediaPrivacyFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => InfluencerScalarRelationFilter, {nullable:true})
    influencer?: InstanceType<typeof InfluencerScalarRelationFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
}

@ObjectType()
export class Media {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    key!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => MediaPrivacy, {defaultValue:'PUBLIC',nullable:false})
    privacy!: `${MediaPrivacy}`;
    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Influencer, {nullable:false})
    influencer?: InstanceType<typeof Influencer>;
    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;
}

@ArgsType()
export class UpdateManyMediaArgs {
    @Field(() => MediaUpdateManyMutationInput, {nullable:false})
    @Type(() => MediaUpdateManyMutationInput)
    data!: InstanceType<typeof MediaUpdateManyMutationInput>;
    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: InstanceType<typeof MediaWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneMediaArgs {
    @Field(() => MediaUpdateInput, {nullable:false})
    @Type(() => MediaUpdateInput)
    data!: InstanceType<typeof MediaUpdateInput>;
    @Field(() => MediaWhereUniqueInput, {nullable:false})
    @Type(() => MediaWhereUniqueInput)
    where!: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneMediaArgs {
    @Field(() => MediaWhereUniqueInput, {nullable:false})
    @Type(() => MediaWhereUniqueInput)
    where!: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
    @Field(() => MediaCreateInput, {nullable:false})
    @Type(() => MediaCreateInput)
    create!: InstanceType<typeof MediaCreateInput>;
    @Field(() => MediaUpdateInput, {nullable:false})
    @Type(() => MediaUpdateInput)
    update!: InstanceType<typeof MediaUpdateInput>;
}

@InputType()
export class AddressCompositeFilter {
    @Field(() => AddressObjectEqualityInput, {nullable:true})
    equals?: InstanceType<typeof AddressObjectEqualityInput>;
    @Field(() => AddressWhereInput, {nullable:true})
    is?: InstanceType<typeof AddressWhereInput>;
    @Field(() => AddressWhereInput, {nullable:true})
    isNot?: InstanceType<typeof AddressWhereInput>;
}

@InputType()
export class AddressObjectEqualityInput {
    @Field(() => String, {nullable:false})
    street!: string;
    @Field(() => String, {nullable:false})
    city!: string;
    @Field(() => String, {nullable:false})
    state!: string;
    @Field(() => String, {nullable:false})
    postalCode!: string;
    @Field(() => String, {nullable:false})
    country!: string;
}

@ArgsType()
export class AggregateCommunicationLogRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class AggregateInflucenerPlanRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class AggregateInfluencerPaymentMethodRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class AggregateInfluencerPaymentRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class AggregateInfluencerRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class AggregateInfluencerSubscriptionRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class AggregateMediaRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class AggregateProductRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class AggregateSessionRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class AggregateStoreRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@InputType()
export class BoolFieldUpdateOperationsInput {
    @Field(() => Boolean, {nullable:true})
    set?: boolean;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeNullableFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class DateTimeNullableWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class EnumCommunicationModeFieldUpdateOperationsInput {
    @Field(() => CommunicationMode, {nullable:true})
    set?: `${CommunicationMode}`;
}

@InputType()
export class EnumCommunicationModeFilter {
    @Field(() => CommunicationMode, {nullable:true})
    equals?: `${CommunicationMode}`;
    @Field(() => [CommunicationMode], {nullable:true})
    in?: Array<`${CommunicationMode}`>;
    @Field(() => [CommunicationMode], {nullable:true})
    notIn?: Array<`${CommunicationMode}`>;
    @Field(() => NestedEnumCommunicationModeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCommunicationModeFilter>;
}

@InputType()
export class EnumCommunicationModeWithAggregatesFilter {
    @Field(() => CommunicationMode, {nullable:true})
    equals?: `${CommunicationMode}`;
    @Field(() => [CommunicationMode], {nullable:true})
    in?: Array<`${CommunicationMode}`>;
    @Field(() => [CommunicationMode], {nullable:true})
    notIn?: Array<`${CommunicationMode}`>;
    @Field(() => NestedEnumCommunicationModeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCommunicationModeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumCommunicationModeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumCommunicationModeFilter>;
    @Field(() => NestedEnumCommunicationModeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumCommunicationModeFilter>;
}

@InputType()
export class EnumCommunicationProviderFieldUpdateOperationsInput {
    @Field(() => CommunicationProvider, {nullable:true})
    set?: `${CommunicationProvider}`;
}

@InputType()
export class EnumCommunicationProviderFilter {
    @Field(() => CommunicationProvider, {nullable:true})
    equals?: `${CommunicationProvider}`;
    @Field(() => [CommunicationProvider], {nullable:true})
    in?: Array<`${CommunicationProvider}`>;
    @Field(() => [CommunicationProvider], {nullable:true})
    notIn?: Array<`${CommunicationProvider}`>;
    @Field(() => NestedEnumCommunicationProviderFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCommunicationProviderFilter>;
}

@InputType()
export class EnumCommunicationProviderWithAggregatesFilter {
    @Field(() => CommunicationProvider, {nullable:true})
    equals?: `${CommunicationProvider}`;
    @Field(() => [CommunicationProvider], {nullable:true})
    in?: Array<`${CommunicationProvider}`>;
    @Field(() => [CommunicationProvider], {nullable:true})
    notIn?: Array<`${CommunicationProvider}`>;
    @Field(() => NestedEnumCommunicationProviderWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCommunicationProviderWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumCommunicationProviderFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumCommunicationProviderFilter>;
    @Field(() => NestedEnumCommunicationProviderFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumCommunicationProviderFilter>;
}

@InputType()
export class EnumCommunicationStatusFieldUpdateOperationsInput {
    @Field(() => CommunicationStatus, {nullable:true})
    set?: `${CommunicationStatus}`;
}

@InputType()
export class EnumCommunicationStatusFilter {
    @Field(() => CommunicationStatus, {nullable:true})
    equals?: `${CommunicationStatus}`;
    @Field(() => [CommunicationStatus], {nullable:true})
    in?: Array<`${CommunicationStatus}`>;
    @Field(() => [CommunicationStatus], {nullable:true})
    notIn?: Array<`${CommunicationStatus}`>;
    @Field(() => NestedEnumCommunicationStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCommunicationStatusFilter>;
}

@InputType()
export class EnumCommunicationStatusWithAggregatesFilter {
    @Field(() => CommunicationStatus, {nullable:true})
    equals?: `${CommunicationStatus}`;
    @Field(() => [CommunicationStatus], {nullable:true})
    in?: Array<`${CommunicationStatus}`>;
    @Field(() => [CommunicationStatus], {nullable:true})
    notIn?: Array<`${CommunicationStatus}`>;
    @Field(() => NestedEnumCommunicationStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCommunicationStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumCommunicationStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumCommunicationStatusFilter>;
    @Field(() => NestedEnumCommunicationStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumCommunicationStatusFilter>;
}

@InputType()
export class EnumCommunicationTypeFieldUpdateOperationsInput {
    @Field(() => CommunicationType, {nullable:true})
    set?: `${CommunicationType}`;
}

@InputType()
export class EnumCommunicationTypeFilter {
    @Field(() => CommunicationType, {nullable:true})
    equals?: `${CommunicationType}`;
    @Field(() => [CommunicationType], {nullable:true})
    in?: Array<`${CommunicationType}`>;
    @Field(() => [CommunicationType], {nullable:true})
    notIn?: Array<`${CommunicationType}`>;
    @Field(() => NestedEnumCommunicationTypeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCommunicationTypeFilter>;
}

@InputType()
export class EnumCommunicationTypeWithAggregatesFilter {
    @Field(() => CommunicationType, {nullable:true})
    equals?: `${CommunicationType}`;
    @Field(() => [CommunicationType], {nullable:true})
    in?: Array<`${CommunicationType}`>;
    @Field(() => [CommunicationType], {nullable:true})
    notIn?: Array<`${CommunicationType}`>;
    @Field(() => NestedEnumCommunicationTypeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCommunicationTypeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumCommunicationTypeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumCommunicationTypeFilter>;
    @Field(() => NestedEnumCommunicationTypeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumCommunicationTypeFilter>;
}

@InputType()
export class EnumCurrencyFieldUpdateOperationsInput {
    @Field(() => Currency, {nullable:true})
    set?: `${Currency}`;
}

@InputType()
export class EnumCurrencyFilter {
    @Field(() => Currency, {nullable:true})
    equals?: `${Currency}`;
    @Field(() => [Currency], {nullable:true})
    in?: Array<`${Currency}`>;
    @Field(() => [Currency], {nullable:true})
    notIn?: Array<`${Currency}`>;
    @Field(() => NestedEnumCurrencyFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCurrencyFilter>;
}

@InputType()
export class EnumCurrencyWithAggregatesFilter {
    @Field(() => Currency, {nullable:true})
    equals?: `${Currency}`;
    @Field(() => [Currency], {nullable:true})
    in?: Array<`${Currency}`>;
    @Field(() => [Currency], {nullable:true})
    notIn?: Array<`${Currency}`>;
    @Field(() => NestedEnumCurrencyWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCurrencyWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumCurrencyFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumCurrencyFilter>;
    @Field(() => NestedEnumCurrencyFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumCurrencyFilter>;
}

@InputType()
export class EnumFontFieldUpdateOperationsInput {
    @Field(() => Font, {nullable:true})
    set?: `${Font}`;
}

@InputType()
export class EnumFontFilter {
    @Field(() => Font, {nullable:true})
    equals?: `${Font}`;
    @Field(() => [Font], {nullable:true})
    in?: Array<`${Font}`>;
    @Field(() => [Font], {nullable:true})
    notIn?: Array<`${Font}`>;
    @Field(() => NestedEnumFontFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumFontFilter>;
}

@InputType()
export class EnumFontWithAggregatesFilter {
    @Field(() => Font, {nullable:true})
    equals?: `${Font}`;
    @Field(() => [Font], {nullable:true})
    in?: Array<`${Font}`>;
    @Field(() => [Font], {nullable:true})
    notIn?: Array<`${Font}`>;
    @Field(() => NestedEnumFontWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumFontWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumFontFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumFontFilter>;
    @Field(() => NestedEnumFontFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumFontFilter>;
}

@InputType()
export class EnumMediaPrivacyFieldUpdateOperationsInput {
    @Field(() => MediaPrivacy, {nullable:true})
    set?: `${MediaPrivacy}`;
}

@InputType()
export class EnumMediaPrivacyFilter {
    @Field(() => MediaPrivacy, {nullable:true})
    equals?: `${MediaPrivacy}`;
    @Field(() => [MediaPrivacy], {nullable:true})
    in?: Array<`${MediaPrivacy}`>;
    @Field(() => [MediaPrivacy], {nullable:true})
    notIn?: Array<`${MediaPrivacy}`>;
    @Field(() => NestedEnumMediaPrivacyFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumMediaPrivacyFilter>;
}

@InputType()
export class EnumMediaPrivacyWithAggregatesFilter {
    @Field(() => MediaPrivacy, {nullable:true})
    equals?: `${MediaPrivacy}`;
    @Field(() => [MediaPrivacy], {nullable:true})
    in?: Array<`${MediaPrivacy}`>;
    @Field(() => [MediaPrivacy], {nullable:true})
    notIn?: Array<`${MediaPrivacy}`>;
    @Field(() => NestedEnumMediaPrivacyWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumMediaPrivacyWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumMediaPrivacyFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumMediaPrivacyFilter>;
    @Field(() => NestedEnumMediaPrivacyFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumMediaPrivacyFilter>;
}

@InputType()
export class EnumMediaTypeFieldUpdateOperationsInput {
    @Field(() => MediaType, {nullable:true})
    set?: `${MediaType}`;
}

@InputType()
export class EnumMediaTypeFilter {
    @Field(() => MediaType, {nullable:true})
    equals?: `${MediaType}`;
    @Field(() => [MediaType], {nullable:true})
    in?: Array<`${MediaType}`>;
    @Field(() => [MediaType], {nullable:true})
    notIn?: Array<`${MediaType}`>;
    @Field(() => NestedEnumMediaTypeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumMediaTypeFilter>;
}

@InputType()
export class EnumMediaTypeWithAggregatesFilter {
    @Field(() => MediaType, {nullable:true})
    equals?: `${MediaType}`;
    @Field(() => [MediaType], {nullable:true})
    in?: Array<`${MediaType}`>;
    @Field(() => [MediaType], {nullable:true})
    notIn?: Array<`${MediaType}`>;
    @Field(() => NestedEnumMediaTypeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumMediaTypeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumMediaTypeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumMediaTypeFilter>;
    @Field(() => NestedEnumMediaTypeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumMediaTypeFilter>;
}

@InputType()
export class EnumPaymentStatusFieldUpdateOperationsInput {
    @Field(() => PaymentStatus, {nullable:true})
    set?: `${PaymentStatus}`;
}

@InputType()
export class EnumPaymentStatusFilter {
    @Field(() => PaymentStatus, {nullable:true})
    equals?: `${PaymentStatus}`;
    @Field(() => [PaymentStatus], {nullable:true})
    in?: Array<`${PaymentStatus}`>;
    @Field(() => [PaymentStatus], {nullable:true})
    notIn?: Array<`${PaymentStatus}`>;
    @Field(() => NestedEnumPaymentStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPaymentStatusFilter>;
}

@InputType()
export class EnumPaymentStatusWithAggregatesFilter {
    @Field(() => PaymentStatus, {nullable:true})
    equals?: `${PaymentStatus}`;
    @Field(() => [PaymentStatus], {nullable:true})
    in?: Array<`${PaymentStatus}`>;
    @Field(() => [PaymentStatus], {nullable:true})
    notIn?: Array<`${PaymentStatus}`>;
    @Field(() => NestedEnumPaymentStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPaymentStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumPaymentStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumPaymentStatusFilter>;
    @Field(() => NestedEnumPaymentStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumPaymentStatusFilter>;
}

@InputType()
export class EnumPlanIntervalFieldUpdateOperationsInput {
    @Field(() => PlanInterval, {nullable:true})
    set?: `${PlanInterval}`;
}

@InputType()
export class EnumPlanIntervalFilter {
    @Field(() => PlanInterval, {nullable:true})
    equals?: `${PlanInterval}`;
    @Field(() => [PlanInterval], {nullable:true})
    in?: Array<`${PlanInterval}`>;
    @Field(() => [PlanInterval], {nullable:true})
    notIn?: Array<`${PlanInterval}`>;
    @Field(() => NestedEnumPlanIntervalFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPlanIntervalFilter>;
}

@InputType()
export class EnumPlanIntervalWithAggregatesFilter {
    @Field(() => PlanInterval, {nullable:true})
    equals?: `${PlanInterval}`;
    @Field(() => [PlanInterval], {nullable:true})
    in?: Array<`${PlanInterval}`>;
    @Field(() => [PlanInterval], {nullable:true})
    notIn?: Array<`${PlanInterval}`>;
    @Field(() => NestedEnumPlanIntervalWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPlanIntervalWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumPlanIntervalFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumPlanIntervalFilter>;
    @Field(() => NestedEnumPlanIntervalFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumPlanIntervalFilter>;
}

@InputType()
export class EnumProductStyleFieldUpdateOperationsInput {
    @Field(() => ProductStyle, {nullable:true})
    set?: `${ProductStyle}`;
}

@InputType()
export class EnumProductStyleFilter {
    @Field(() => ProductStyle, {nullable:true})
    equals?: `${ProductStyle}`;
    @Field(() => [ProductStyle], {nullable:true})
    in?: Array<`${ProductStyle}`>;
    @Field(() => [ProductStyle], {nullable:true})
    notIn?: Array<`${ProductStyle}`>;
    @Field(() => NestedEnumProductStyleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductStyleFilter>;
}

@InputType()
export class EnumProductStyleWithAggregatesFilter {
    @Field(() => ProductStyle, {nullable:true})
    equals?: `${ProductStyle}`;
    @Field(() => [ProductStyle], {nullable:true})
    in?: Array<`${ProductStyle}`>;
    @Field(() => [ProductStyle], {nullable:true})
    notIn?: Array<`${ProductStyle}`>;
    @Field(() => NestedEnumProductStyleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductStyleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumProductStyleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumProductStyleFilter>;
    @Field(() => NestedEnumProductStyleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumProductStyleFilter>;
}

@InputType()
export class EnumProductTypeFieldUpdateOperationsInput {
    @Field(() => ProductType, {nullable:true})
    set?: `${ProductType}`;
}

@InputType()
export class EnumProductTypeFilter {
    @Field(() => ProductType, {nullable:true})
    equals?: `${ProductType}`;
    @Field(() => [ProductType], {nullable:true})
    in?: Array<`${ProductType}`>;
    @Field(() => [ProductType], {nullable:true})
    notIn?: Array<`${ProductType}`>;
    @Field(() => NestedEnumProductTypeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductTypeFilter>;
}

@InputType()
export class EnumProductTypeWithAggregatesFilter {
    @Field(() => ProductType, {nullable:true})
    equals?: `${ProductType}`;
    @Field(() => [ProductType], {nullable:true})
    in?: Array<`${ProductType}`>;
    @Field(() => [ProductType], {nullable:true})
    notIn?: Array<`${ProductType}`>;
    @Field(() => NestedEnumProductTypeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductTypeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumProductTypeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumProductTypeFilter>;
    @Field(() => NestedEnumProductTypeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumProductTypeFilter>;
}

@InputType()
export class EnumRoleFieldUpdateOperationsInput {
    @Field(() => Role, {nullable:true})
    set?: `${Role}`;
}

@InputType()
export class EnumRoleFilter {
    @Field(() => Role, {nullable:true})
    equals?: `${Role}`;
    @Field(() => [Role], {nullable:true})
    in?: Array<`${Role}`>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<`${Role}`>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class EnumRoleWithAggregatesFilter {
    @Field(() => Role, {nullable:true})
    equals?: `${Role}`;
    @Field(() => [Role], {nullable:true})
    in?: Array<`${Role}`>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<`${Role}`>;
    @Field(() => NestedEnumRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumRoleFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class EnumSendModeFieldUpdateOperationsInput {
    @Field(() => SendMode, {nullable:true})
    set?: `${SendMode}`;
}

@InputType()
export class EnumSendModeFilter {
    @Field(() => SendMode, {nullable:true})
    equals?: `${SendMode}`;
    @Field(() => [SendMode], {nullable:true})
    in?: Array<`${SendMode}`>;
    @Field(() => [SendMode], {nullable:true})
    notIn?: Array<`${SendMode}`>;
    @Field(() => NestedEnumSendModeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumSendModeFilter>;
}

@InputType()
export class EnumSendModeWithAggregatesFilter {
    @Field(() => SendMode, {nullable:true})
    equals?: `${SendMode}`;
    @Field(() => [SendMode], {nullable:true})
    in?: Array<`${SendMode}`>;
    @Field(() => [SendMode], {nullable:true})
    notIn?: Array<`${SendMode}`>;
    @Field(() => NestedEnumSendModeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumSendModeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumSendModeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumSendModeFilter>;
    @Field(() => NestedEnumSendModeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumSendModeFilter>;
}

@InputType()
export class EnumSocialPlatformFieldUpdateOperationsInput {
    @Field(() => SocialPlatform, {nullable:true})
    set?: `${SocialPlatform}`;
}

@InputType()
export class EnumSocialPlatformFilter {
    @Field(() => SocialPlatform, {nullable:true})
    equals?: `${SocialPlatform}`;
    @Field(() => [SocialPlatform], {nullable:true})
    in?: Array<`${SocialPlatform}`>;
    @Field(() => [SocialPlatform], {nullable:true})
    notIn?: Array<`${SocialPlatform}`>;
    @Field(() => NestedEnumSocialPlatformFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumSocialPlatformFilter>;
}

@InputType()
export class EnumStoreDesignFieldUpdateOperationsInput {
    @Field(() => StoreDesign, {nullable:true})
    set?: `${StoreDesign}`;
}

@InputType()
export class EnumStoreDesignFilter {
    @Field(() => StoreDesign, {nullable:true})
    equals?: `${StoreDesign}`;
    @Field(() => [StoreDesign], {nullable:true})
    in?: Array<`${StoreDesign}`>;
    @Field(() => [StoreDesign], {nullable:true})
    notIn?: Array<`${StoreDesign}`>;
    @Field(() => NestedEnumStoreDesignFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumStoreDesignFilter>;
}

@InputType()
export class EnumStoreDesignWithAggregatesFilter {
    @Field(() => StoreDesign, {nullable:true})
    equals?: `${StoreDesign}`;
    @Field(() => [StoreDesign], {nullable:true})
    in?: Array<`${StoreDesign}`>;
    @Field(() => [StoreDesign], {nullable:true})
    notIn?: Array<`${StoreDesign}`>;
    @Field(() => NestedEnumStoreDesignWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumStoreDesignWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumStoreDesignFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumStoreDesignFilter>;
    @Field(() => NestedEnumStoreDesignFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumStoreDesignFilter>;
}

@InputType()
export class EnumSubscriptionStatusFieldUpdateOperationsInput {
    @Field(() => SubscriptionStatus, {nullable:true})
    set?: `${SubscriptionStatus}`;
}

@InputType()
export class EnumSubscriptionStatusFilter {
    @Field(() => SubscriptionStatus, {nullable:true})
    equals?: `${SubscriptionStatus}`;
    @Field(() => [SubscriptionStatus], {nullable:true})
    in?: Array<`${SubscriptionStatus}`>;
    @Field(() => [SubscriptionStatus], {nullable:true})
    notIn?: Array<`${SubscriptionStatus}`>;
    @Field(() => NestedEnumSubscriptionStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumSubscriptionStatusFilter>;
}

@InputType()
export class EnumSubscriptionStatusWithAggregatesFilter {
    @Field(() => SubscriptionStatus, {nullable:true})
    equals?: `${SubscriptionStatus}`;
    @Field(() => [SubscriptionStatus], {nullable:true})
    in?: Array<`${SubscriptionStatus}`>;
    @Field(() => [SubscriptionStatus], {nullable:true})
    notIn?: Array<`${SubscriptionStatus}`>;
    @Field(() => NestedEnumSubscriptionStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumSubscriptionStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumSubscriptionStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumSubscriptionStatusFilter>;
    @Field(() => NestedEnumSubscriptionStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumSubscriptionStatusFilter>;
}

@InputType()
export class EnumTaxBehaviourFieldUpdateOperationsInput {
    @Field(() => TaxBehaviour, {nullable:true})
    set?: `${TaxBehaviour}`;
}

@InputType()
export class EnumTaxBehaviourFilter {
    @Field(() => TaxBehaviour, {nullable:true})
    equals?: `${TaxBehaviour}`;
    @Field(() => [TaxBehaviour], {nullable:true})
    in?: Array<`${TaxBehaviour}`>;
    @Field(() => [TaxBehaviour], {nullable:true})
    notIn?: Array<`${TaxBehaviour}`>;
    @Field(() => NestedEnumTaxBehaviourFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumTaxBehaviourFilter>;
}

@InputType()
export class EnumTaxBehaviourWithAggregatesFilter {
    @Field(() => TaxBehaviour, {nullable:true})
    equals?: `${TaxBehaviour}`;
    @Field(() => [TaxBehaviour], {nullable:true})
    in?: Array<`${TaxBehaviour}`>;
    @Field(() => [TaxBehaviour], {nullable:true})
    notIn?: Array<`${TaxBehaviour}`>;
    @Field(() => NestedEnumTaxBehaviourWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumTaxBehaviourWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumTaxBehaviourFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumTaxBehaviourFilter>;
    @Field(() => NestedEnumTaxBehaviourFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumTaxBehaviourFilter>;
}

@ArgsType()
export class FindCommunicationLogRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class FindInflucenerPlanRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class FindInfluencerPaymentMethodRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class FindInfluencerPaymentRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class FindInfluencerRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class FindInfluencerSubscriptionRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class FindMediaRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class FindProductRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class FindSessionRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class FindStoreRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class IntNullableWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class JsonNullableFilter {
    @Field(() => GraphQLJSON, {nullable:true})
    equals?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    not?: any;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class JsonNullableWithAggregatesFilter {
    @Field(() => GraphQLJSON, {nullable:true})
    equals?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    not?: any;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedJsonNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedJsonNullableFilter>;
    @Field(() => NestedJsonNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedJsonNullableFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class NestedBoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedBoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeNullableFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class NestedDateTimeNullableWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedEnumCommunicationModeFilter {
    @Field(() => CommunicationMode, {nullable:true})
    equals?: `${CommunicationMode}`;
    @Field(() => [CommunicationMode], {nullable:true})
    in?: Array<`${CommunicationMode}`>;
    @Field(() => [CommunicationMode], {nullable:true})
    notIn?: Array<`${CommunicationMode}`>;
    @Field(() => NestedEnumCommunicationModeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCommunicationModeFilter>;
}

@InputType()
export class NestedEnumCommunicationModeWithAggregatesFilter {
    @Field(() => CommunicationMode, {nullable:true})
    equals?: `${CommunicationMode}`;
    @Field(() => [CommunicationMode], {nullable:true})
    in?: Array<`${CommunicationMode}`>;
    @Field(() => [CommunicationMode], {nullable:true})
    notIn?: Array<`${CommunicationMode}`>;
    @Field(() => NestedEnumCommunicationModeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCommunicationModeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumCommunicationModeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumCommunicationModeFilter>;
    @Field(() => NestedEnumCommunicationModeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumCommunicationModeFilter>;
}

@InputType()
export class NestedEnumCommunicationProviderFilter {
    @Field(() => CommunicationProvider, {nullable:true})
    equals?: `${CommunicationProvider}`;
    @Field(() => [CommunicationProvider], {nullable:true})
    in?: Array<`${CommunicationProvider}`>;
    @Field(() => [CommunicationProvider], {nullable:true})
    notIn?: Array<`${CommunicationProvider}`>;
    @Field(() => NestedEnumCommunicationProviderFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCommunicationProviderFilter>;
}

@InputType()
export class NestedEnumCommunicationProviderWithAggregatesFilter {
    @Field(() => CommunicationProvider, {nullable:true})
    equals?: `${CommunicationProvider}`;
    @Field(() => [CommunicationProvider], {nullable:true})
    in?: Array<`${CommunicationProvider}`>;
    @Field(() => [CommunicationProvider], {nullable:true})
    notIn?: Array<`${CommunicationProvider}`>;
    @Field(() => NestedEnumCommunicationProviderWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCommunicationProviderWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumCommunicationProviderFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumCommunicationProviderFilter>;
    @Field(() => NestedEnumCommunicationProviderFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumCommunicationProviderFilter>;
}

@InputType()
export class NestedEnumCommunicationStatusFilter {
    @Field(() => CommunicationStatus, {nullable:true})
    equals?: `${CommunicationStatus}`;
    @Field(() => [CommunicationStatus], {nullable:true})
    in?: Array<`${CommunicationStatus}`>;
    @Field(() => [CommunicationStatus], {nullable:true})
    notIn?: Array<`${CommunicationStatus}`>;
    @Field(() => NestedEnumCommunicationStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCommunicationStatusFilter>;
}

@InputType()
export class NestedEnumCommunicationStatusWithAggregatesFilter {
    @Field(() => CommunicationStatus, {nullable:true})
    equals?: `${CommunicationStatus}`;
    @Field(() => [CommunicationStatus], {nullable:true})
    in?: Array<`${CommunicationStatus}`>;
    @Field(() => [CommunicationStatus], {nullable:true})
    notIn?: Array<`${CommunicationStatus}`>;
    @Field(() => NestedEnumCommunicationStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCommunicationStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumCommunicationStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumCommunicationStatusFilter>;
    @Field(() => NestedEnumCommunicationStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumCommunicationStatusFilter>;
}

@InputType()
export class NestedEnumCommunicationTypeFilter {
    @Field(() => CommunicationType, {nullable:true})
    equals?: `${CommunicationType}`;
    @Field(() => [CommunicationType], {nullable:true})
    in?: Array<`${CommunicationType}`>;
    @Field(() => [CommunicationType], {nullable:true})
    notIn?: Array<`${CommunicationType}`>;
    @Field(() => NestedEnumCommunicationTypeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCommunicationTypeFilter>;
}

@InputType()
export class NestedEnumCommunicationTypeWithAggregatesFilter {
    @Field(() => CommunicationType, {nullable:true})
    equals?: `${CommunicationType}`;
    @Field(() => [CommunicationType], {nullable:true})
    in?: Array<`${CommunicationType}`>;
    @Field(() => [CommunicationType], {nullable:true})
    notIn?: Array<`${CommunicationType}`>;
    @Field(() => NestedEnumCommunicationTypeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCommunicationTypeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumCommunicationTypeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumCommunicationTypeFilter>;
    @Field(() => NestedEnumCommunicationTypeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumCommunicationTypeFilter>;
}

@InputType()
export class NestedEnumCurrencyFilter {
    @Field(() => Currency, {nullable:true})
    equals?: `${Currency}`;
    @Field(() => [Currency], {nullable:true})
    in?: Array<`${Currency}`>;
    @Field(() => [Currency], {nullable:true})
    notIn?: Array<`${Currency}`>;
    @Field(() => NestedEnumCurrencyFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCurrencyFilter>;
}

@InputType()
export class NestedEnumCurrencyWithAggregatesFilter {
    @Field(() => Currency, {nullable:true})
    equals?: `${Currency}`;
    @Field(() => [Currency], {nullable:true})
    in?: Array<`${Currency}`>;
    @Field(() => [Currency], {nullable:true})
    notIn?: Array<`${Currency}`>;
    @Field(() => NestedEnumCurrencyWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumCurrencyWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumCurrencyFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumCurrencyFilter>;
    @Field(() => NestedEnumCurrencyFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumCurrencyFilter>;
}

@InputType()
export class NestedEnumFontFilter {
    @Field(() => Font, {nullable:true})
    equals?: `${Font}`;
    @Field(() => [Font], {nullable:true})
    in?: Array<`${Font}`>;
    @Field(() => [Font], {nullable:true})
    notIn?: Array<`${Font}`>;
    @Field(() => NestedEnumFontFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumFontFilter>;
}

@InputType()
export class NestedEnumFontWithAggregatesFilter {
    @Field(() => Font, {nullable:true})
    equals?: `${Font}`;
    @Field(() => [Font], {nullable:true})
    in?: Array<`${Font}`>;
    @Field(() => [Font], {nullable:true})
    notIn?: Array<`${Font}`>;
    @Field(() => NestedEnumFontWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumFontWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumFontFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumFontFilter>;
    @Field(() => NestedEnumFontFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumFontFilter>;
}

@InputType()
export class NestedEnumMediaPrivacyFilter {
    @Field(() => MediaPrivacy, {nullable:true})
    equals?: `${MediaPrivacy}`;
    @Field(() => [MediaPrivacy], {nullable:true})
    in?: Array<`${MediaPrivacy}`>;
    @Field(() => [MediaPrivacy], {nullable:true})
    notIn?: Array<`${MediaPrivacy}`>;
    @Field(() => NestedEnumMediaPrivacyFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumMediaPrivacyFilter>;
}

@InputType()
export class NestedEnumMediaPrivacyWithAggregatesFilter {
    @Field(() => MediaPrivacy, {nullable:true})
    equals?: `${MediaPrivacy}`;
    @Field(() => [MediaPrivacy], {nullable:true})
    in?: Array<`${MediaPrivacy}`>;
    @Field(() => [MediaPrivacy], {nullable:true})
    notIn?: Array<`${MediaPrivacy}`>;
    @Field(() => NestedEnumMediaPrivacyWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumMediaPrivacyWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumMediaPrivacyFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumMediaPrivacyFilter>;
    @Field(() => NestedEnumMediaPrivacyFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumMediaPrivacyFilter>;
}

@InputType()
export class NestedEnumMediaTypeFilter {
    @Field(() => MediaType, {nullable:true})
    equals?: `${MediaType}`;
    @Field(() => [MediaType], {nullable:true})
    in?: Array<`${MediaType}`>;
    @Field(() => [MediaType], {nullable:true})
    notIn?: Array<`${MediaType}`>;
    @Field(() => NestedEnumMediaTypeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumMediaTypeFilter>;
}

@InputType()
export class NestedEnumMediaTypeWithAggregatesFilter {
    @Field(() => MediaType, {nullable:true})
    equals?: `${MediaType}`;
    @Field(() => [MediaType], {nullable:true})
    in?: Array<`${MediaType}`>;
    @Field(() => [MediaType], {nullable:true})
    notIn?: Array<`${MediaType}`>;
    @Field(() => NestedEnumMediaTypeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumMediaTypeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumMediaTypeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumMediaTypeFilter>;
    @Field(() => NestedEnumMediaTypeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumMediaTypeFilter>;
}

@InputType()
export class NestedEnumPaymentStatusFilter {
    @Field(() => PaymentStatus, {nullable:true})
    equals?: `${PaymentStatus}`;
    @Field(() => [PaymentStatus], {nullable:true})
    in?: Array<`${PaymentStatus}`>;
    @Field(() => [PaymentStatus], {nullable:true})
    notIn?: Array<`${PaymentStatus}`>;
    @Field(() => NestedEnumPaymentStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPaymentStatusFilter>;
}

@InputType()
export class NestedEnumPaymentStatusWithAggregatesFilter {
    @Field(() => PaymentStatus, {nullable:true})
    equals?: `${PaymentStatus}`;
    @Field(() => [PaymentStatus], {nullable:true})
    in?: Array<`${PaymentStatus}`>;
    @Field(() => [PaymentStatus], {nullable:true})
    notIn?: Array<`${PaymentStatus}`>;
    @Field(() => NestedEnumPaymentStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPaymentStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumPaymentStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumPaymentStatusFilter>;
    @Field(() => NestedEnumPaymentStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumPaymentStatusFilter>;
}

@InputType()
export class NestedEnumPlanIntervalFilter {
    @Field(() => PlanInterval, {nullable:true})
    equals?: `${PlanInterval}`;
    @Field(() => [PlanInterval], {nullable:true})
    in?: Array<`${PlanInterval}`>;
    @Field(() => [PlanInterval], {nullable:true})
    notIn?: Array<`${PlanInterval}`>;
    @Field(() => NestedEnumPlanIntervalFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPlanIntervalFilter>;
}

@InputType()
export class NestedEnumPlanIntervalWithAggregatesFilter {
    @Field(() => PlanInterval, {nullable:true})
    equals?: `${PlanInterval}`;
    @Field(() => [PlanInterval], {nullable:true})
    in?: Array<`${PlanInterval}`>;
    @Field(() => [PlanInterval], {nullable:true})
    notIn?: Array<`${PlanInterval}`>;
    @Field(() => NestedEnumPlanIntervalWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPlanIntervalWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumPlanIntervalFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumPlanIntervalFilter>;
    @Field(() => NestedEnumPlanIntervalFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumPlanIntervalFilter>;
}

@InputType()
export class NestedEnumProductStyleFilter {
    @Field(() => ProductStyle, {nullable:true})
    equals?: `${ProductStyle}`;
    @Field(() => [ProductStyle], {nullable:true})
    in?: Array<`${ProductStyle}`>;
    @Field(() => [ProductStyle], {nullable:true})
    notIn?: Array<`${ProductStyle}`>;
    @Field(() => NestedEnumProductStyleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductStyleFilter>;
}

@InputType()
export class NestedEnumProductStyleWithAggregatesFilter {
    @Field(() => ProductStyle, {nullable:true})
    equals?: `${ProductStyle}`;
    @Field(() => [ProductStyle], {nullable:true})
    in?: Array<`${ProductStyle}`>;
    @Field(() => [ProductStyle], {nullable:true})
    notIn?: Array<`${ProductStyle}`>;
    @Field(() => NestedEnumProductStyleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductStyleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumProductStyleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumProductStyleFilter>;
    @Field(() => NestedEnumProductStyleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumProductStyleFilter>;
}

@InputType()
export class NestedEnumProductTypeFilter {
    @Field(() => ProductType, {nullable:true})
    equals?: `${ProductType}`;
    @Field(() => [ProductType], {nullable:true})
    in?: Array<`${ProductType}`>;
    @Field(() => [ProductType], {nullable:true})
    notIn?: Array<`${ProductType}`>;
    @Field(() => NestedEnumProductTypeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductTypeFilter>;
}

@InputType()
export class NestedEnumProductTypeWithAggregatesFilter {
    @Field(() => ProductType, {nullable:true})
    equals?: `${ProductType}`;
    @Field(() => [ProductType], {nullable:true})
    in?: Array<`${ProductType}`>;
    @Field(() => [ProductType], {nullable:true})
    notIn?: Array<`${ProductType}`>;
    @Field(() => NestedEnumProductTypeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductTypeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumProductTypeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumProductTypeFilter>;
    @Field(() => NestedEnumProductTypeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumProductTypeFilter>;
}

@InputType()
export class NestedEnumRoleFilter {
    @Field(() => Role, {nullable:true})
    equals?: `${Role}`;
    @Field(() => [Role], {nullable:true})
    in?: Array<`${Role}`>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<`${Role}`>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class NestedEnumRoleWithAggregatesFilter {
    @Field(() => Role, {nullable:true})
    equals?: `${Role}`;
    @Field(() => [Role], {nullable:true})
    in?: Array<`${Role}`>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<`${Role}`>;
    @Field(() => NestedEnumRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumRoleFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class NestedEnumSendModeFilter {
    @Field(() => SendMode, {nullable:true})
    equals?: `${SendMode}`;
    @Field(() => [SendMode], {nullable:true})
    in?: Array<`${SendMode}`>;
    @Field(() => [SendMode], {nullable:true})
    notIn?: Array<`${SendMode}`>;
    @Field(() => NestedEnumSendModeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumSendModeFilter>;
}

@InputType()
export class NestedEnumSendModeWithAggregatesFilter {
    @Field(() => SendMode, {nullable:true})
    equals?: `${SendMode}`;
    @Field(() => [SendMode], {nullable:true})
    in?: Array<`${SendMode}`>;
    @Field(() => [SendMode], {nullable:true})
    notIn?: Array<`${SendMode}`>;
    @Field(() => NestedEnumSendModeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumSendModeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumSendModeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumSendModeFilter>;
    @Field(() => NestedEnumSendModeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumSendModeFilter>;
}

@InputType()
export class NestedEnumSocialPlatformFilter {
    @Field(() => SocialPlatform, {nullable:true})
    equals?: `${SocialPlatform}`;
    @Field(() => [SocialPlatform], {nullable:true})
    in?: Array<`${SocialPlatform}`>;
    @Field(() => [SocialPlatform], {nullable:true})
    notIn?: Array<`${SocialPlatform}`>;
    @Field(() => NestedEnumSocialPlatformFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumSocialPlatformFilter>;
}

@InputType()
export class NestedEnumStoreDesignFilter {
    @Field(() => StoreDesign, {nullable:true})
    equals?: `${StoreDesign}`;
    @Field(() => [StoreDesign], {nullable:true})
    in?: Array<`${StoreDesign}`>;
    @Field(() => [StoreDesign], {nullable:true})
    notIn?: Array<`${StoreDesign}`>;
    @Field(() => NestedEnumStoreDesignFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumStoreDesignFilter>;
}

@InputType()
export class NestedEnumStoreDesignWithAggregatesFilter {
    @Field(() => StoreDesign, {nullable:true})
    equals?: `${StoreDesign}`;
    @Field(() => [StoreDesign], {nullable:true})
    in?: Array<`${StoreDesign}`>;
    @Field(() => [StoreDesign], {nullable:true})
    notIn?: Array<`${StoreDesign}`>;
    @Field(() => NestedEnumStoreDesignWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumStoreDesignWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumStoreDesignFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumStoreDesignFilter>;
    @Field(() => NestedEnumStoreDesignFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumStoreDesignFilter>;
}

@InputType()
export class NestedEnumSubscriptionStatusFilter {
    @Field(() => SubscriptionStatus, {nullable:true})
    equals?: `${SubscriptionStatus}`;
    @Field(() => [SubscriptionStatus], {nullable:true})
    in?: Array<`${SubscriptionStatus}`>;
    @Field(() => [SubscriptionStatus], {nullable:true})
    notIn?: Array<`${SubscriptionStatus}`>;
    @Field(() => NestedEnumSubscriptionStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumSubscriptionStatusFilter>;
}

@InputType()
export class NestedEnumSubscriptionStatusWithAggregatesFilter {
    @Field(() => SubscriptionStatus, {nullable:true})
    equals?: `${SubscriptionStatus}`;
    @Field(() => [SubscriptionStatus], {nullable:true})
    in?: Array<`${SubscriptionStatus}`>;
    @Field(() => [SubscriptionStatus], {nullable:true})
    notIn?: Array<`${SubscriptionStatus}`>;
    @Field(() => NestedEnumSubscriptionStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumSubscriptionStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumSubscriptionStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumSubscriptionStatusFilter>;
    @Field(() => NestedEnumSubscriptionStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumSubscriptionStatusFilter>;
}

@InputType()
export class NestedEnumTaxBehaviourFilter {
    @Field(() => TaxBehaviour, {nullable:true})
    equals?: `${TaxBehaviour}`;
    @Field(() => [TaxBehaviour], {nullable:true})
    in?: Array<`${TaxBehaviour}`>;
    @Field(() => [TaxBehaviour], {nullable:true})
    notIn?: Array<`${TaxBehaviour}`>;
    @Field(() => NestedEnumTaxBehaviourFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumTaxBehaviourFilter>;
}

@InputType()
export class NestedEnumTaxBehaviourWithAggregatesFilter {
    @Field(() => TaxBehaviour, {nullable:true})
    equals?: `${TaxBehaviour}`;
    @Field(() => [TaxBehaviour], {nullable:true})
    in?: Array<`${TaxBehaviour}`>;
    @Field(() => [TaxBehaviour], {nullable:true})
    notIn?: Array<`${TaxBehaviour}`>;
    @Field(() => NestedEnumTaxBehaviourWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumTaxBehaviourWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumTaxBehaviourFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumTaxBehaviourFilter>;
    @Field(() => NestedEnumTaxBehaviourFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumTaxBehaviourFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedFloatNullableFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class NestedIntNullableWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedJsonNullableFilter {
    @Field(() => GraphQLJSON, {nullable:true})
    equals?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    not?: any;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableDateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}

@InputType()
export class NullableIntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}

@ArgsType()
export class RunCommandRawArgs {
    @Field(() => GraphQLJSON, {nullable:false})
    command!: any;
}

@InputType()
export class SocialLinkCompositeListFilter {
    @Field(() => [SocialLinkObjectEqualityInput], {nullable:true})
    equals?: Array<SocialLinkObjectEqualityInput>;
    @Field(() => SocialLinkWhereInput, {nullable:true})
    every?: InstanceType<typeof SocialLinkWhereInput>;
    @Field(() => SocialLinkWhereInput, {nullable:true})
    some?: InstanceType<typeof SocialLinkWhereInput>;
    @Field(() => SocialLinkWhereInput, {nullable:true})
    none?: InstanceType<typeof SocialLinkWhereInput>;
    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class SocialLinkDeleteManyInput {
    @Field(() => SocialLinkWhereInput, {nullable:false})
    @Type(() => SocialLinkWhereInput)
    where!: InstanceType<typeof SocialLinkWhereInput>;
}

@InputType()
export class SocialLinkListCreateEnvelopeInput {
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    @Type(() => SocialLinkCreateInput)
    set?: Array<SocialLinkCreateInput>;
}

@InputType()
export class SocialLinkListUpdateEnvelopeInput {
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    @Type(() => SocialLinkCreateInput)
    set?: Array<SocialLinkCreateInput>;
    @Field(() => [SocialLinkCreateInput], {nullable:true})
    push?: Array<SocialLinkCreateInput>;
    @Field(() => SocialLinkUpdateManyInput, {nullable:true})
    @Type(() => SocialLinkUpdateManyInput)
    updateMany?: InstanceType<typeof SocialLinkUpdateManyInput>;
    @Field(() => SocialLinkDeleteManyInput, {nullable:true})
    @Type(() => SocialLinkDeleteManyInput)
    deleteMany?: InstanceType<typeof SocialLinkDeleteManyInput>;
}

@InputType()
export class SocialLinkObjectEqualityInput {
    @Field(() => SocialPlatform, {nullable:false})
    platform!: `${SocialPlatform}`;
    @Field(() => String, {nullable:false})
    url!: string;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: `${QueryMode}`;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: `${QueryMode}`;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: `${QueryMode}`;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: `${QueryMode}`;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ArgsType()
export class CreateManyProductArgs {
    @Field(() => [ProductCreateManyInput], {nullable:false})
    @Type(() => ProductCreateManyInput)
    data!: Array<ProductCreateManyInput>;
}

@ArgsType()
export class CreateOneProductArgs {
    @Field(() => ProductCreateInput, {nullable:false})
    @Type(() => ProductCreateInput)
    data!: InstanceType<typeof ProductCreateInput>;
}

@ArgsType()
export class DeleteManyProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstProductOrThrowArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ProductScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ProductScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ProductScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueProductOrThrowArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}

@ArgsType()
export class ProductAggregateArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class ProductAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    position?: `${SortOrder}`;
}

@InputType()
export class ProductCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    style?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    position?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    mediaId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    subTitle?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    buttonText?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    storeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    published?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class ProductCreateManyMediaInputEnvelope {
    @Field(() => [ProductCreateManyMediaInput], {nullable:false})
    @Type(() => ProductCreateManyMediaInput)
    data!: Array<ProductCreateManyMediaInput>;
}

@InputType()
export class ProductCreateManyMediaInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => ProductStyle, {nullable:false})
    style!: `${ProductStyle}`;
    @Field(() => ProductType, {nullable:false})
    type!: `${ProductType}`;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => Int, {nullable:false})
    position!: number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    subTitle?: string;
    @Field(() => String, {nullable:true})
    buttonText?: string;
    @Field(() => String, {nullable:false})
    storeId!: string;
    @Field(() => Boolean, {nullable:false})
    published!: boolean;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductCreateManyStoreInputEnvelope {
    @Field(() => [ProductCreateManyStoreInput], {nullable:false})
    @Type(() => ProductCreateManyStoreInput)
    data!: Array<ProductCreateManyStoreInput>;
}

@InputType()
export class ProductCreateManyStoreInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => ProductStyle, {nullable:false})
    style!: `${ProductStyle}`;
    @Field(() => ProductType, {nullable:false})
    type!: `${ProductType}`;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => Int, {nullable:false})
    position!: number;
    @Field(() => String, {nullable:true})
    mediaId?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    subTitle?: string;
    @Field(() => String, {nullable:true})
    buttonText?: string;
    @Field(() => Boolean, {nullable:false})
    published!: boolean;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => ProductStyle, {nullable:false})
    style!: `${ProductStyle}`;
    @Field(() => ProductType, {nullable:false})
    type!: `${ProductType}`;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => Int, {nullable:false})
    position!: number;
    @Field(() => String, {nullable:true})
    mediaId?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    subTitle?: string;
    @Field(() => String, {nullable:true})
    buttonText?: string;
    @Field(() => String, {nullable:false})
    storeId!: string;
    @Field(() => Boolean, {nullable:false})
    published!: boolean;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductCreateNestedManyWithoutMediaInput {
    @Field(() => [ProductCreateWithoutMediaInput], {nullable:true})
    @Type(() => ProductCreateWithoutMediaInput)
    create?: Array<ProductCreateWithoutMediaInput>;
    @Field(() => [ProductCreateOrConnectWithoutMediaInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutMediaInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutMediaInput>;
    @Field(() => ProductCreateManyMediaInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyMediaInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyMediaInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}

@InputType()
export class ProductCreateNestedManyWithoutStoreInput {
    @Field(() => [ProductCreateWithoutStoreInput], {nullable:true})
    @Type(() => ProductCreateWithoutStoreInput)
    create?: Array<ProductCreateWithoutStoreInput>;
    @Field(() => [ProductCreateOrConnectWithoutStoreInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutStoreInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutStoreInput>;
    @Field(() => ProductCreateManyStoreInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyStoreInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyStoreInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}

@InputType()
export class ProductCreateOrConnectWithoutMediaInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => ProductCreateWithoutMediaInput, {nullable:false})
    @Type(() => ProductCreateWithoutMediaInput)
    create!: InstanceType<typeof ProductCreateWithoutMediaInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutStoreInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => ProductCreateWithoutStoreInput, {nullable:false})
    @Type(() => ProductCreateWithoutStoreInput)
    create!: InstanceType<typeof ProductCreateWithoutStoreInput>;
}

@InputType()
export class ProductCreateWithoutMediaInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => ProductStyle, {nullable:false})
    style!: `${ProductStyle}`;
    @Field(() => ProductType, {nullable:false})
    type!: `${ProductType}`;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => Int, {nullable:false})
    position!: number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    subTitle?: string;
    @Field(() => String, {nullable:true})
    buttonText?: string;
    @Field(() => Boolean, {nullable:false})
    published!: boolean;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => StoreCreateNestedOneWithoutProductsInput, {nullable:false})
    store!: InstanceType<typeof StoreCreateNestedOneWithoutProductsInput>;
}

@InputType()
export class ProductCreateWithoutStoreInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => ProductStyle, {nullable:false})
    style!: `${ProductStyle}`;
    @Field(() => ProductType, {nullable:false})
    type!: `${ProductType}`;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => Int, {nullable:false})
    position!: number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    subTitle?: string;
    @Field(() => String, {nullable:true})
    buttonText?: string;
    @Field(() => Boolean, {nullable:false})
    published!: boolean;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => MediaCreateNestedOneWithoutProductsInput, {nullable:true})
    media?: InstanceType<typeof MediaCreateNestedOneWithoutProductsInput>;
}

@InputType()
export class ProductCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => ProductStyle, {nullable:false})
    style!: `${ProductStyle}`;
    @Field(() => ProductType, {nullable:false})
    type!: `${ProductType}`;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => Int, {nullable:false})
    position!: number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    subTitle?: string;
    @Field(() => String, {nullable:true})
    buttonText?: string;
    @Field(() => Boolean, {nullable:false})
    published!: boolean;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => MediaCreateNestedOneWithoutProductsInput, {nullable:true})
    media?: InstanceType<typeof MediaCreateNestedOneWithoutProductsInput>;
    @Field(() => StoreCreateNestedOneWithoutProductsInput, {nullable:false})
    store!: InstanceType<typeof StoreCreateNestedOneWithoutProductsInput>;
}

@ArgsType()
export class ProductGroupByArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithAggregationInput>;
    @Field(() => [ProductScalarFieldEnum], {nullable:false})
    by!: Array<`${ProductScalarFieldEnum}`>;
    @Field(() => ProductScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProductScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class ProductListRelationFilter {
    @Field(() => ProductWhereInput, {nullable:true})
    every?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    some?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    none?: InstanceType<typeof ProductWhereInput>;
}

@InputType()
export class ProductMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    style?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    position?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    mediaId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    subTitle?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    buttonText?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    storeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    published?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class ProductMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    style?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    position?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    mediaId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    subTitle?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    buttonText?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    storeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    published?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class ProductOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class ProductOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    style?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    position?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    mediaId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    subTitle?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    buttonText?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    storeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    published?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => ProductCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCountOrderByAggregateInput>;
    @Field(() => ProductAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgOrderByAggregateInput>;
    @Field(() => ProductMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductMaxOrderByAggregateInput>;
    @Field(() => ProductMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductMinOrderByAggregateInput>;
    @Field(() => ProductSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProductSumOrderByAggregateInput>;
}

@InputType()
export class ProductOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    style?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    position?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    mediaId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    subTitle?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    buttonText?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    storeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    published?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => MediaOrderByWithRelationInput, {nullable:true})
    media?: InstanceType<typeof MediaOrderByWithRelationInput>;
    @Field(() => StoreOrderByWithRelationInput, {nullable:true})
    store?: InstanceType<typeof StoreOrderByWithRelationInput>;
}

@InputType()
export class ProductScalarWhereWithAggregatesInput {
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumProductStyleWithAggregatesFilter, {nullable:true})
    style?: InstanceType<typeof EnumProductStyleWithAggregatesFilter>;
    @Field(() => EnumProductTypeWithAggregatesFilter, {nullable:true})
    type?: InstanceType<typeof EnumProductTypeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    position?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    mediaId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    subTitle?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    buttonText?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    storeId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    published?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class ProductScalarWhereInput {
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    AND?: Array<ProductScalarWhereInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    OR?: Array<ProductScalarWhereInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    NOT?: Array<ProductScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => EnumProductStyleFilter, {nullable:true})
    style?: InstanceType<typeof EnumProductStyleFilter>;
    @Field(() => EnumProductTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumProductTypeFilter>;
    @Field(() => StringFilter, {nullable:true})
    url?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    position?: InstanceType<typeof IntFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    mediaId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    title?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    subTitle?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    buttonText?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    storeId?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    published?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class ProductSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    position?: `${SortOrder}`;
}

@InputType()
export class ProductUncheckedCreateNestedManyWithoutMediaInput {
    @Field(() => [ProductCreateWithoutMediaInput], {nullable:true})
    @Type(() => ProductCreateWithoutMediaInput)
    create?: Array<ProductCreateWithoutMediaInput>;
    @Field(() => [ProductCreateOrConnectWithoutMediaInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutMediaInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutMediaInput>;
    @Field(() => ProductCreateManyMediaInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyMediaInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyMediaInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}

@InputType()
export class ProductUncheckedCreateNestedManyWithoutStoreInput {
    @Field(() => [ProductCreateWithoutStoreInput], {nullable:true})
    @Type(() => ProductCreateWithoutStoreInput)
    create?: Array<ProductCreateWithoutStoreInput>;
    @Field(() => [ProductCreateOrConnectWithoutStoreInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutStoreInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutStoreInput>;
    @Field(() => ProductCreateManyStoreInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyStoreInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyStoreInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}

@InputType()
export class ProductUncheckedCreateWithoutMediaInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => ProductStyle, {nullable:false})
    style!: `${ProductStyle}`;
    @Field(() => ProductType, {nullable:false})
    type!: `${ProductType}`;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => Int, {nullable:false})
    position!: number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    subTitle?: string;
    @Field(() => String, {nullable:true})
    buttonText?: string;
    @Field(() => String, {nullable:false})
    storeId!: string;
    @Field(() => Boolean, {nullable:false})
    published!: boolean;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductUncheckedCreateWithoutStoreInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => ProductStyle, {nullable:false})
    style!: `${ProductStyle}`;
    @Field(() => ProductType, {nullable:false})
    type!: `${ProductType}`;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => Int, {nullable:false})
    position!: number;
    @Field(() => String, {nullable:true})
    mediaId?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    subTitle?: string;
    @Field(() => String, {nullable:true})
    buttonText?: string;
    @Field(() => Boolean, {nullable:false})
    published!: boolean;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => ProductStyle, {nullable:false})
    style!: `${ProductStyle}`;
    @Field(() => ProductType, {nullable:false})
    type!: `${ProductType}`;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => Int, {nullable:false})
    position!: number;
    @Field(() => String, {nullable:true})
    mediaId?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    subTitle?: string;
    @Field(() => String, {nullable:true})
    buttonText?: string;
    @Field(() => String, {nullable:false})
    storeId!: string;
    @Field(() => Boolean, {nullable:false})
    published!: boolean;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutMediaNestedInput {
    @Field(() => [ProductCreateWithoutMediaInput], {nullable:true})
    @Type(() => ProductCreateWithoutMediaInput)
    create?: Array<ProductCreateWithoutMediaInput>;
    @Field(() => [ProductCreateOrConnectWithoutMediaInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutMediaInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutMediaInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutMediaInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutMediaInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutMediaInput>;
    @Field(() => ProductCreateManyMediaInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyMediaInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyMediaInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutMediaInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutMediaInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutMediaInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutMediaInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutMediaInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutMediaInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutMediaInput {
    @Field(() => EnumProductStyleFieldUpdateOperationsInput, {nullable:true})
    style?: InstanceType<typeof EnumProductStyleFieldUpdateOperationsInput>;
    @Field(() => EnumProductTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumProductTypeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    position?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subTitle?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    buttonText?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutStoreNestedInput {
    @Field(() => [ProductCreateWithoutStoreInput], {nullable:true})
    @Type(() => ProductCreateWithoutStoreInput)
    create?: Array<ProductCreateWithoutStoreInput>;
    @Field(() => [ProductCreateOrConnectWithoutStoreInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutStoreInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutStoreInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutStoreInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutStoreInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutStoreInput>;
    @Field(() => ProductCreateManyStoreInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyStoreInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyStoreInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutStoreInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutStoreInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutStoreInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutStoreInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutStoreInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutStoreInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutStoreInput {
    @Field(() => EnumProductStyleFieldUpdateOperationsInput, {nullable:true})
    style?: InstanceType<typeof EnumProductStyleFieldUpdateOperationsInput>;
    @Field(() => EnumProductTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumProductTypeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    position?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    mediaId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subTitle?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    buttonText?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUncheckedUpdateManyInput {
    @Field(() => EnumProductStyleFieldUpdateOperationsInput, {nullable:true})
    style?: InstanceType<typeof EnumProductStyleFieldUpdateOperationsInput>;
    @Field(() => EnumProductTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumProductTypeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    position?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    mediaId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subTitle?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    buttonText?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutMediaInput {
    @Field(() => EnumProductStyleFieldUpdateOperationsInput, {nullable:true})
    style?: InstanceType<typeof EnumProductStyleFieldUpdateOperationsInput>;
    @Field(() => EnumProductTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumProductTypeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    position?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subTitle?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    buttonText?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutStoreInput {
    @Field(() => EnumProductStyleFieldUpdateOperationsInput, {nullable:true})
    style?: InstanceType<typeof EnumProductStyleFieldUpdateOperationsInput>;
    @Field(() => EnumProductTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumProductTypeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    position?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    mediaId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subTitle?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    buttonText?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUncheckedUpdateInput {
    @Field(() => EnumProductStyleFieldUpdateOperationsInput, {nullable:true})
    style?: InstanceType<typeof EnumProductStyleFieldUpdateOperationsInput>;
    @Field(() => EnumProductTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumProductTypeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    position?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    mediaId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subTitle?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    buttonText?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUpdateManyMutationInput {
    @Field(() => EnumProductStyleFieldUpdateOperationsInput, {nullable:true})
    style?: InstanceType<typeof EnumProductStyleFieldUpdateOperationsInput>;
    @Field(() => EnumProductTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumProductTypeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    position?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subTitle?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    buttonText?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUpdateManyWithWhereWithoutMediaInput {
    @Field(() => ProductScalarWhereInput, {nullable:false})
    @Type(() => ProductScalarWhereInput)
    where!: InstanceType<typeof ProductScalarWhereInput>;
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductUpdateManyMutationInput)
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
}

@InputType()
export class ProductUpdateManyWithWhereWithoutStoreInput {
    @Field(() => ProductScalarWhereInput, {nullable:false})
    @Type(() => ProductScalarWhereInput)
    where!: InstanceType<typeof ProductScalarWhereInput>;
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductUpdateManyMutationInput)
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
}

@InputType()
export class ProductUpdateManyWithoutMediaNestedInput {
    @Field(() => [ProductCreateWithoutMediaInput], {nullable:true})
    @Type(() => ProductCreateWithoutMediaInput)
    create?: Array<ProductCreateWithoutMediaInput>;
    @Field(() => [ProductCreateOrConnectWithoutMediaInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutMediaInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutMediaInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutMediaInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutMediaInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutMediaInput>;
    @Field(() => ProductCreateManyMediaInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyMediaInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyMediaInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutMediaInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutMediaInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutMediaInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutMediaInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutMediaInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutMediaInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUpdateManyWithoutStoreNestedInput {
    @Field(() => [ProductCreateWithoutStoreInput], {nullable:true})
    @Type(() => ProductCreateWithoutStoreInput)
    create?: Array<ProductCreateWithoutStoreInput>;
    @Field(() => [ProductCreateOrConnectWithoutStoreInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutStoreInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutStoreInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutStoreInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutStoreInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutStoreInput>;
    @Field(() => ProductCreateManyStoreInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyStoreInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyStoreInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutStoreInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutStoreInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutStoreInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutStoreInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutStoreInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutStoreInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUpdateWithWhereUniqueWithoutMediaInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => ProductUpdateWithoutMediaInput, {nullable:false})
    @Type(() => ProductUpdateWithoutMediaInput)
    data!: InstanceType<typeof ProductUpdateWithoutMediaInput>;
}

@InputType()
export class ProductUpdateWithWhereUniqueWithoutStoreInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => ProductUpdateWithoutStoreInput, {nullable:false})
    @Type(() => ProductUpdateWithoutStoreInput)
    data!: InstanceType<typeof ProductUpdateWithoutStoreInput>;
}

@InputType()
export class ProductUpdateWithoutMediaInput {
    @Field(() => EnumProductStyleFieldUpdateOperationsInput, {nullable:true})
    style?: InstanceType<typeof EnumProductStyleFieldUpdateOperationsInput>;
    @Field(() => EnumProductTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumProductTypeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    position?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subTitle?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    buttonText?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StoreUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    store?: InstanceType<typeof StoreUpdateOneRequiredWithoutProductsNestedInput>;
}

@InputType()
export class ProductUpdateWithoutStoreInput {
    @Field(() => EnumProductStyleFieldUpdateOperationsInput, {nullable:true})
    style?: InstanceType<typeof EnumProductStyleFieldUpdateOperationsInput>;
    @Field(() => EnumProductTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumProductTypeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    position?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subTitle?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    buttonText?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => MediaUpdateOneWithoutProductsNestedInput, {nullable:true})
    media?: InstanceType<typeof MediaUpdateOneWithoutProductsNestedInput>;
}

@InputType()
export class ProductUpdateInput {
    @Field(() => EnumProductStyleFieldUpdateOperationsInput, {nullable:true})
    style?: InstanceType<typeof EnumProductStyleFieldUpdateOperationsInput>;
    @Field(() => EnumProductTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumProductTypeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    position?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subTitle?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    buttonText?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => MediaUpdateOneWithoutProductsNestedInput, {nullable:true})
    media?: InstanceType<typeof MediaUpdateOneWithoutProductsNestedInput>;
    @Field(() => StoreUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    store?: InstanceType<typeof StoreUpdateOneRequiredWithoutProductsNestedInput>;
}

@InputType()
export class ProductUpsertWithWhereUniqueWithoutMediaInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => ProductUpdateWithoutMediaInput, {nullable:false})
    @Type(() => ProductUpdateWithoutMediaInput)
    update!: InstanceType<typeof ProductUpdateWithoutMediaInput>;
    @Field(() => ProductCreateWithoutMediaInput, {nullable:false})
    @Type(() => ProductCreateWithoutMediaInput)
    create!: InstanceType<typeof ProductCreateWithoutMediaInput>;
}

@InputType()
export class ProductUpsertWithWhereUniqueWithoutStoreInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => ProductUpdateWithoutStoreInput, {nullable:false})
    @Type(() => ProductUpdateWithoutStoreInput)
    update!: InstanceType<typeof ProductUpdateWithoutStoreInput>;
    @Field(() => ProductCreateWithoutStoreInput, {nullable:false})
    @Type(() => ProductCreateWithoutStoreInput)
    create!: InstanceType<typeof ProductCreateWithoutStoreInput>;
}

@InputType()
export class ProductWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;
    @Field(() => EnumProductStyleFilter, {nullable:true})
    style?: InstanceType<typeof EnumProductStyleFilter>;
    @Field(() => EnumProductTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumProductTypeFilter>;
    @Field(() => StringFilter, {nullable:true})
    url?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    position?: InstanceType<typeof IntFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    mediaId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    title?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    subTitle?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    buttonText?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    storeId?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    published?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => MediaNullableScalarRelationFilter, {nullable:true})
    media?: InstanceType<typeof MediaNullableScalarRelationFilter>;
    @Field(() => StoreScalarRelationFilter, {nullable:true})
    store?: InstanceType<typeof StoreScalarRelationFilter>;
}

@InputType()
export class ProductWhereInput {
    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => EnumProductStyleFilter, {nullable:true})
    style?: InstanceType<typeof EnumProductStyleFilter>;
    @Field(() => EnumProductTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumProductTypeFilter>;
    @Field(() => StringFilter, {nullable:true})
    url?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    position?: InstanceType<typeof IntFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    mediaId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    title?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    subTitle?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    buttonText?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    storeId?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    published?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => MediaNullableScalarRelationFilter, {nullable:true})
    media?: InstanceType<typeof MediaNullableScalarRelationFilter>;
    @Field(() => StoreScalarRelationFilter, {nullable:true})
    store?: InstanceType<typeof StoreScalarRelationFilter>;
}

@ObjectType()
export class Product {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => ProductStyle, {nullable:false})
    style!: `${ProductStyle}`;
    @Field(() => ProductType, {nullable:false})
    type!: `${ProductType}`;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => Int, {nullable:false})
    position!: number;
    @Field(() => String, {nullable:true})
    mediaId!: string | null;
    @Field(() => String, {nullable:true})
    title!: string | null;
    @Field(() => String, {nullable:true})
    subTitle!: string | null;
    @Field(() => String, {nullable:true})
    buttonText!: string | null;
    @Field(() => String, {nullable:false})
    storeId!: string;
    @Field(() => Boolean, {nullable:false})
    published!: boolean;
    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Media, {nullable:true})
    media?: InstanceType<typeof Media> | null;
    @Field(() => Store, {nullable:false})
    store?: InstanceType<typeof Store>;
}

@ArgsType()
export class UpdateManyProductArgs {
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductUpdateManyMutationInput)
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneProductArgs {
    @Field(() => ProductUpdateInput, {nullable:false})
    @Type(() => ProductUpdateInput)
    data!: InstanceType<typeof ProductUpdateInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => ProductCreateInput, {nullable:false})
    @Type(() => ProductCreateInput)
    create!: InstanceType<typeof ProductCreateInput>;
    @Field(() => ProductUpdateInput, {nullable:false})
    @Type(() => ProductUpdateInput)
    update!: InstanceType<typeof ProductUpdateInput>;
}

@ArgsType()
export class CreateManySessionArgs {
    @Field(() => [SessionCreateManyInput], {nullable:false})
    @Type(() => SessionCreateManyInput)
    data!: Array<SessionCreateManyInput>;
}

@ArgsType()
export class CreateOneSessionArgs {
    @Field(() => SessionCreateInput, {nullable:false})
    @Type(() => SessionCreateInput)
    data!: InstanceType<typeof SessionCreateInput>;
}

@ArgsType()
export class DeleteManySessionArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    where?: InstanceType<typeof SessionWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneSessionArgs {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
}

@ArgsType()
export class FindFirstSessionOrThrowArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    where?: InstanceType<typeof SessionWhereInput>;
    @Field(() => [SessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithRelationInput>;
    @Field(() => SessionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SessionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SessionScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstSessionArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    where?: InstanceType<typeof SessionWhereInput>;
    @Field(() => [SessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithRelationInput>;
    @Field(() => SessionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SessionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SessionScalarFieldEnum}`>;
}

@ArgsType()
export class FindManySessionArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    where?: InstanceType<typeof SessionWhereInput>;
    @Field(() => [SessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithRelationInput>;
    @Field(() => SessionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SessionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SessionScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueSessionOrThrowArgs {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
}

@ArgsType()
export class FindUniqueSessionArgs {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
}

@ArgsType()
export class SessionAggregateArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    where?: InstanceType<typeof SessionWhereInput>;
    @Field(() => [SessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithRelationInput>;
    @Field(() => SessionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class SessionCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    valid?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class SessionCreateManyInfluencerInputEnvelope {
    @Field(() => [SessionCreateManyInfluencerInput], {nullable:false})
    @Type(() => SessionCreateManyInfluencerInput)
    data!: Array<SessionCreateManyInfluencerInput>;
}

@InputType()
export class SessionCreateManyInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Boolean, {nullable:true})
    valid?: boolean;
    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SessionCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    influencerId?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Boolean, {nullable:true})
    valid?: boolean;
    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SessionCreateNestedManyWithoutInfluencerInput {
    @Field(() => [SessionCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => SessionCreateWithoutInfluencerInput)
    create?: Array<SessionCreateWithoutInfluencerInput>;
    @Field(() => [SessionCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => SessionCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<SessionCreateOrConnectWithoutInfluencerInput>;
    @Field(() => SessionCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => SessionCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof SessionCreateManyInfluencerInputEnvelope>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
}

@InputType()
export class SessionCreateOrConnectWithoutInfluencerInput {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    @Field(() => SessionCreateWithoutInfluencerInput, {nullable:false})
    @Type(() => SessionCreateWithoutInfluencerInput)
    create!: InstanceType<typeof SessionCreateWithoutInfluencerInput>;
}

@InputType()
export class SessionCreateWithoutInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Boolean, {nullable:true})
    valid?: boolean;
    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SessionCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Boolean, {nullable:true})
    valid?: boolean;
    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InfluencerCreateNestedOneWithoutSessionsInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerCreateNestedOneWithoutSessionsInput>;
}

@ArgsType()
export class SessionGroupByArgs {
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    where?: InstanceType<typeof SessionWhereInput>;
    @Field(() => [SessionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithAggregationInput>;
    @Field(() => [SessionScalarFieldEnum], {nullable:false})
    by!: Array<`${SessionScalarFieldEnum}`>;
    @Field(() => SessionScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof SessionScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class SessionListRelationFilter {
    @Field(() => SessionWhereInput, {nullable:true})
    every?: InstanceType<typeof SessionWhereInput>;
    @Field(() => SessionWhereInput, {nullable:true})
    some?: InstanceType<typeof SessionWhereInput>;
    @Field(() => SessionWhereInput, {nullable:true})
    none?: InstanceType<typeof SessionWhereInput>;
}

@InputType()
export class SessionMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    valid?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class SessionMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    valid?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class SessionOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class SessionOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    valid?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SessionCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SessionCountOrderByAggregateInput>;
    @Field(() => SessionMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SessionMaxOrderByAggregateInput>;
    @Field(() => SessionMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SessionMinOrderByAggregateInput>;
}

@InputType()
export class SessionOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    valid?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => InfluencerOrderByWithRelationInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerOrderByWithRelationInput>;
}

@InputType()
export class SessionScalarWhereWithAggregatesInput {
    @Field(() => [SessionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SessionScalarWhereWithAggregatesInput>;
    @Field(() => [SessionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SessionScalarWhereWithAggregatesInput>;
    @Field(() => [SessionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SessionScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    valid?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class SessionScalarWhereInput {
    @Field(() => [SessionScalarWhereInput], {nullable:true})
    AND?: Array<SessionScalarWhereInput>;
    @Field(() => [SessionScalarWhereInput], {nullable:true})
    OR?: Array<SessionScalarWhereInput>;
    @Field(() => [SessionScalarWhereInput], {nullable:true})
    NOT?: Array<SessionScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    token?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    valid?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class SessionUncheckedCreateNestedManyWithoutInfluencerInput {
    @Field(() => [SessionCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => SessionCreateWithoutInfluencerInput)
    create?: Array<SessionCreateWithoutInfluencerInput>;
    @Field(() => [SessionCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => SessionCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<SessionCreateOrConnectWithoutInfluencerInput>;
    @Field(() => SessionCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => SessionCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof SessionCreateManyInfluencerInputEnvelope>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
}

@InputType()
export class SessionUncheckedCreateWithoutInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Boolean, {nullable:true})
    valid?: boolean;
    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SessionUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    influencerId?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Boolean, {nullable:true})
    valid?: boolean;
    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SessionUncheckedUpdateManyWithoutInfluencerNestedInput {
    @Field(() => [SessionCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => SessionCreateWithoutInfluencerInput)
    create?: Array<SessionCreateWithoutInfluencerInput>;
    @Field(() => [SessionCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => SessionCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<SessionCreateOrConnectWithoutInfluencerInput>;
    @Field(() => [SessionUpsertWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => SessionUpsertWithWhereUniqueWithoutInfluencerInput)
    upsert?: Array<SessionUpsertWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => SessionCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => SessionCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof SessionCreateManyInfluencerInputEnvelope>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [SessionUpdateWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => SessionUpdateWithWhereUniqueWithoutInfluencerInput)
    update?: Array<SessionUpdateWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => [SessionUpdateManyWithWhereWithoutInfluencerInput], {nullable:true})
    @Type(() => SessionUpdateManyWithWhereWithoutInfluencerInput)
    updateMany?: Array<SessionUpdateManyWithWhereWithoutInfluencerInput>;
    @Field(() => [SessionScalarWhereInput], {nullable:true})
    @Type(() => SessionScalarWhereInput)
    deleteMany?: Array<SessionScalarWhereInput>;
}

@InputType()
export class SessionUncheckedUpdateManyWithoutInfluencerInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    valid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SessionUncheckedUpdateManyInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    valid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SessionUncheckedUpdateWithoutInfluencerInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    valid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SessionUncheckedUpdateInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    valid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SessionUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    valid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SessionUpdateManyWithWhereWithoutInfluencerInput {
    @Field(() => SessionScalarWhereInput, {nullable:false})
    @Type(() => SessionScalarWhereInput)
    where!: InstanceType<typeof SessionScalarWhereInput>;
    @Field(() => SessionUpdateManyMutationInput, {nullable:false})
    @Type(() => SessionUpdateManyMutationInput)
    data!: InstanceType<typeof SessionUpdateManyMutationInput>;
}

@InputType()
export class SessionUpdateManyWithoutInfluencerNestedInput {
    @Field(() => [SessionCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => SessionCreateWithoutInfluencerInput)
    create?: Array<SessionCreateWithoutInfluencerInput>;
    @Field(() => [SessionCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => SessionCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<SessionCreateOrConnectWithoutInfluencerInput>;
    @Field(() => [SessionUpsertWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => SessionUpsertWithWhereUniqueWithoutInfluencerInput)
    upsert?: Array<SessionUpsertWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => SessionCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => SessionCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof SessionCreateManyInfluencerInputEnvelope>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    @Type(() => SessionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [SessionUpdateWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => SessionUpdateWithWhereUniqueWithoutInfluencerInput)
    update?: Array<SessionUpdateWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => [SessionUpdateManyWithWhereWithoutInfluencerInput], {nullable:true})
    @Type(() => SessionUpdateManyWithWhereWithoutInfluencerInput)
    updateMany?: Array<SessionUpdateManyWithWhereWithoutInfluencerInput>;
    @Field(() => [SessionScalarWhereInput], {nullable:true})
    @Type(() => SessionScalarWhereInput)
    deleteMany?: Array<SessionScalarWhereInput>;
}

@InputType()
export class SessionUpdateWithWhereUniqueWithoutInfluencerInput {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    @Field(() => SessionUpdateWithoutInfluencerInput, {nullable:false})
    @Type(() => SessionUpdateWithoutInfluencerInput)
    data!: InstanceType<typeof SessionUpdateWithoutInfluencerInput>;
}

@InputType()
export class SessionUpdateWithoutInfluencerInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    valid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SessionUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    valid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InfluencerUpdateOneWithoutSessionsNestedInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerUpdateOneWithoutSessionsNestedInput>;
}

@InputType()
export class SessionUpsertWithWhereUniqueWithoutInfluencerInput {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    @Field(() => SessionUpdateWithoutInfluencerInput, {nullable:false})
    @Type(() => SessionUpdateWithoutInfluencerInput)
    update!: InstanceType<typeof SessionUpdateWithoutInfluencerInput>;
    @Field(() => SessionCreateWithoutInfluencerInput, {nullable:false})
    @Type(() => SessionCreateWithoutInfluencerInput)
    create!: InstanceType<typeof SessionCreateWithoutInfluencerInput>;
}

@InputType()
export class SessionWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => [SessionWhereInput], {nullable:true})
    AND?: Array<SessionWhereInput>;
    @Field(() => [SessionWhereInput], {nullable:true})
    OR?: Array<SessionWhereInput>;
    @Field(() => [SessionWhereInput], {nullable:true})
    NOT?: Array<SessionWhereInput>;
    @Field(() => StringNullableFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    valid?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => InfluencerNullableScalarRelationFilter, {nullable:true})
    influencer?: InstanceType<typeof InfluencerNullableScalarRelationFilter>;
}

@InputType()
export class SessionWhereInput {
    @Field(() => [SessionWhereInput], {nullable:true})
    AND?: Array<SessionWhereInput>;
    @Field(() => [SessionWhereInput], {nullable:true})
    OR?: Array<SessionWhereInput>;
    @Field(() => [SessionWhereInput], {nullable:true})
    NOT?: Array<SessionWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    token?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    valid?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => InfluencerNullableScalarRelationFilter, {nullable:true})
    influencer?: InstanceType<typeof InfluencerNullableScalarRelationFilter>;
}

@ObjectType()
export class Session {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    influencerId!: string | null;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Boolean, {defaultValue:true,nullable:false})
    valid!: boolean;
    @Field(() => Date, {nullable:true})
    expiresAt!: Date | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Influencer, {nullable:true})
    influencer?: InstanceType<typeof Influencer> | null;
}

@ArgsType()
export class UpdateManySessionArgs {
    @Field(() => SessionUpdateManyMutationInput, {nullable:false})
    @Type(() => SessionUpdateManyMutationInput)
    data!: InstanceType<typeof SessionUpdateManyMutationInput>;
    @Field(() => SessionWhereInput, {nullable:true})
    @Type(() => SessionWhereInput)
    where?: InstanceType<typeof SessionWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneSessionArgs {
    @Field(() => SessionUpdateInput, {nullable:false})
    @Type(() => SessionUpdateInput)
    data!: InstanceType<typeof SessionUpdateInput>;
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
}

@ArgsType()
export class UpsertOneSessionArgs {
    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    @Field(() => SessionCreateInput, {nullable:false})
    @Type(() => SessionCreateInput)
    create!: InstanceType<typeof SessionCreateInput>;
    @Field(() => SessionUpdateInput, {nullable:false})
    @Type(() => SessionUpdateInput)
    update!: InstanceType<typeof SessionUpdateInput>;
}

@InputType()
export class SocialLinkCreateInput {
    @Field(() => SocialPlatform, {nullable:false})
    platform!: `${SocialPlatform}`;
    @Field(() => String, {nullable:false})
    url!: string;
}

@InputType()
export class SocialLinkOrderByCompositeAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class SocialLinkUpdateManyInput {
    @Field(() => SocialLinkWhereInput, {nullable:false})
    @Type(() => SocialLinkWhereInput)
    where!: InstanceType<typeof SocialLinkWhereInput>;
    @Field(() => SocialLinkUpdateInput, {nullable:false})
    @Type(() => SocialLinkUpdateInput)
    data!: InstanceType<typeof SocialLinkUpdateInput>;
}

@InputType()
export class SocialLinkUpdateInput {
    @Field(() => EnumSocialPlatformFieldUpdateOperationsInput, {nullable:true})
    platform?: InstanceType<typeof EnumSocialPlatformFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class SocialLinkWhereInput {
    @Field(() => [SocialLinkWhereInput], {nullable:true})
    AND?: Array<SocialLinkWhereInput>;
    @Field(() => [SocialLinkWhereInput], {nullable:true})
    OR?: Array<SocialLinkWhereInput>;
    @Field(() => [SocialLinkWhereInput], {nullable:true})
    NOT?: Array<SocialLinkWhereInput>;
    @Field(() => EnumSocialPlatformFilter, {nullable:true})
    platform?: InstanceType<typeof EnumSocialPlatformFilter>;
    @Field(() => StringFilter, {nullable:true})
    url?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class SocialLink {
    @Field(() => SocialPlatform, {nullable:false})
    platform!: `${SocialPlatform}`;
    @Field(() => String, {nullable:false})
    url!: string;
}

@ArgsType()
export class CreateManyStoreArgs {
    @Field(() => [StoreCreateManyInput], {nullable:false})
    @Type(() => StoreCreateManyInput)
    data!: Array<StoreCreateManyInput>;
}

@ArgsType()
export class CreateOneStoreArgs {
    @Field(() => StoreCreateInput, {nullable:false})
    @Type(() => StoreCreateInput)
    data!: InstanceType<typeof StoreCreateInput>;
}

@ArgsType()
export class DeleteManyStoreArgs {
    @Field(() => StoreWhereInput, {nullable:true})
    @Type(() => StoreWhereInput)
    where?: InstanceType<typeof StoreWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneStoreArgs {
    @Field(() => StoreWhereUniqueInput, {nullable:false})
    @Type(() => StoreWhereUniqueInput)
    where!: Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>;
}

@ArgsType()
export class FindFirstStoreOrThrowArgs {
    @Field(() => StoreWhereInput, {nullable:true})
    @Type(() => StoreWhereInput)
    where?: InstanceType<typeof StoreWhereInput>;
    @Field(() => [StoreOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoreOrderByWithRelationInput>;
    @Field(() => StoreWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StoreScalarFieldEnum], {nullable:true})
    distinct?: Array<`${StoreScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstStoreArgs {
    @Field(() => StoreWhereInput, {nullable:true})
    @Type(() => StoreWhereInput)
    where?: InstanceType<typeof StoreWhereInput>;
    @Field(() => [StoreOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoreOrderByWithRelationInput>;
    @Field(() => StoreWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StoreScalarFieldEnum], {nullable:true})
    distinct?: Array<`${StoreScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyStoreArgs {
    @Field(() => StoreWhereInput, {nullable:true})
    @Type(() => StoreWhereInput)
    where?: InstanceType<typeof StoreWhereInput>;
    @Field(() => [StoreOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoreOrderByWithRelationInput>;
    @Field(() => StoreWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StoreScalarFieldEnum], {nullable:true})
    distinct?: Array<`${StoreScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueStoreOrThrowArgs {
    @Field(() => StoreWhereUniqueInput, {nullable:false})
    @Type(() => StoreWhereUniqueInput)
    where!: Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>;
}

@ArgsType()
export class FindUniqueStoreArgs {
    @Field(() => StoreWhereUniqueInput, {nullable:false})
    @Type(() => StoreWhereUniqueInput)
    where!: Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>;
}

@ArgsType()
export class StoreAggregateArgs {
    @Field(() => StoreWhereInput, {nullable:true})
    @Type(() => StoreWhereInput)
    where?: InstanceType<typeof StoreWhereInput>;
    @Field(() => [StoreOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoreOrderByWithRelationInput>;
    @Field(() => StoreWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class StoreCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    design?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    primaryColor?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    secondaryColor?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    font?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class StoreCreateManyInfluencerInputEnvelope {
    @Field(() => [StoreCreateManyInfluencerInput], {nullable:false})
    @Type(() => StoreCreateManyInfluencerInput)
    data!: Array<StoreCreateManyInfluencerInput>;
}

@InputType()
export class StoreCreateManyInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => StoreDesign, {nullable:false})
    design!: `${StoreDesign}`;
    @Field(() => String, {nullable:false})
    primaryColor!: string;
    @Field(() => String, {nullable:false})
    secondaryColor!: string;
    @Field(() => Font, {nullable:false})
    font!: `${Font}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class StoreCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => StoreDesign, {nullable:false})
    design!: `${StoreDesign}`;
    @Field(() => String, {nullable:false})
    primaryColor!: string;
    @Field(() => String, {nullable:false})
    secondaryColor!: string;
    @Field(() => Font, {nullable:false})
    font!: `${Font}`;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class StoreCreateNestedManyWithoutInfluencerInput {
    @Field(() => [StoreCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => StoreCreateWithoutInfluencerInput)
    create?: Array<StoreCreateWithoutInfluencerInput>;
    @Field(() => [StoreCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => StoreCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<StoreCreateOrConnectWithoutInfluencerInput>;
    @Field(() => StoreCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => StoreCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof StoreCreateManyInfluencerInputEnvelope>;
    @Field(() => [StoreWhereUniqueInput], {nullable:true})
    @Type(() => StoreWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>>;
}

@InputType()
export class StoreCreateNestedOneWithoutProductsInput {
    @Field(() => StoreCreateWithoutProductsInput, {nullable:true})
    @Type(() => StoreCreateWithoutProductsInput)
    create?: InstanceType<typeof StoreCreateWithoutProductsInput>;
    @Field(() => StoreCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => StoreCreateOrConnectWithoutProductsInput)
    connectOrCreate?: InstanceType<typeof StoreCreateOrConnectWithoutProductsInput>;
    @Field(() => StoreWhereUniqueInput, {nullable:true})
    @Type(() => StoreWhereUniqueInput)
    connect?: Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>;
}

@InputType()
export class StoreCreateOrConnectWithoutInfluencerInput {
    @Field(() => StoreWhereUniqueInput, {nullable:false})
    @Type(() => StoreWhereUniqueInput)
    where!: Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => StoreCreateWithoutInfluencerInput, {nullable:false})
    @Type(() => StoreCreateWithoutInfluencerInput)
    create!: InstanceType<typeof StoreCreateWithoutInfluencerInput>;
}

@InputType()
export class StoreCreateOrConnectWithoutProductsInput {
    @Field(() => StoreWhereUniqueInput, {nullable:false})
    @Type(() => StoreWhereUniqueInput)
    where!: Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => StoreCreateWithoutProductsInput, {nullable:false})
    @Type(() => StoreCreateWithoutProductsInput)
    create!: InstanceType<typeof StoreCreateWithoutProductsInput>;
}

@InputType()
export class StoreCreateWithoutInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => StoreDesign, {nullable:false})
    design!: `${StoreDesign}`;
    @Field(() => String, {nullable:false})
    primaryColor!: string;
    @Field(() => String, {nullable:false})
    secondaryColor!: string;
    @Field(() => Font, {nullable:false})
    font!: `${Font}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedManyWithoutStoreInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutStoreInput>;
}

@InputType()
export class StoreCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => StoreDesign, {nullable:false})
    design!: `${StoreDesign}`;
    @Field(() => String, {nullable:false})
    primaryColor!: string;
    @Field(() => String, {nullable:false})
    secondaryColor!: string;
    @Field(() => Font, {nullable:false})
    font!: `${Font}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InfluencerCreateNestedOneWithoutStoresInput, {nullable:false})
    influencer!: InstanceType<typeof InfluencerCreateNestedOneWithoutStoresInput>;
}

@InputType()
export class StoreCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => StoreDesign, {nullable:false})
    design!: `${StoreDesign}`;
    @Field(() => String, {nullable:false})
    primaryColor!: string;
    @Field(() => String, {nullable:false})
    secondaryColor!: string;
    @Field(() => Font, {nullable:false})
    font!: `${Font}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => InfluencerCreateNestedOneWithoutStoresInput, {nullable:false})
    influencer!: InstanceType<typeof InfluencerCreateNestedOneWithoutStoresInput>;
    @Field(() => ProductCreateNestedManyWithoutStoreInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutStoreInput>;
}

@ArgsType()
export class StoreGroupByArgs {
    @Field(() => StoreWhereInput, {nullable:true})
    @Type(() => StoreWhereInput)
    where?: InstanceType<typeof StoreWhereInput>;
    @Field(() => [StoreOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StoreOrderByWithAggregationInput>;
    @Field(() => [StoreScalarFieldEnum], {nullable:false})
    by!: Array<`${StoreScalarFieldEnum}`>;
    @Field(() => StoreScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof StoreScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class StoreListRelationFilter {
    @Field(() => StoreWhereInput, {nullable:true})
    every?: InstanceType<typeof StoreWhereInput>;
    @Field(() => StoreWhereInput, {nullable:true})
    some?: InstanceType<typeof StoreWhereInput>;
    @Field(() => StoreWhereInput, {nullable:true})
    none?: InstanceType<typeof StoreWhereInput>;
}

@InputType()
export class StoreMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    design?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    primaryColor?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    secondaryColor?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    font?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class StoreMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    design?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    primaryColor?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    secondaryColor?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    font?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class StoreOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class StoreOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    design?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    primaryColor?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    secondaryColor?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    font?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => StoreCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StoreCountOrderByAggregateInput>;
    @Field(() => StoreMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StoreMaxOrderByAggregateInput>;
    @Field(() => StoreMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StoreMinOrderByAggregateInput>;
}

@InputType()
export class StoreOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    design?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    primaryColor?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    secondaryColor?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    font?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => InfluencerOrderByWithRelationInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerOrderByWithRelationInput>;
    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: InstanceType<typeof ProductOrderByRelationAggregateInput>;
}

@InputType()
export class StoreScalarRelationFilter {
    @Field(() => StoreWhereInput, {nullable:true})
    is?: InstanceType<typeof StoreWhereInput>;
    @Field(() => StoreWhereInput, {nullable:true})
    isNot?: InstanceType<typeof StoreWhereInput>;
}

@InputType()
export class StoreScalarWhereWithAggregatesInput {
    @Field(() => [StoreScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StoreScalarWhereWithAggregatesInput>;
    @Field(() => [StoreScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StoreScalarWhereWithAggregatesInput>;
    @Field(() => [StoreScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StoreScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumStoreDesignWithAggregatesFilter, {nullable:true})
    design?: InstanceType<typeof EnumStoreDesignWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    primaryColor?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    secondaryColor?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumFontWithAggregatesFilter, {nullable:true})
    font?: InstanceType<typeof EnumFontWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class StoreScalarWhereInput {
    @Field(() => [StoreScalarWhereInput], {nullable:true})
    AND?: Array<StoreScalarWhereInput>;
    @Field(() => [StoreScalarWhereInput], {nullable:true})
    OR?: Array<StoreScalarWhereInput>;
    @Field(() => [StoreScalarWhereInput], {nullable:true})
    NOT?: Array<StoreScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => EnumStoreDesignFilter, {nullable:true})
    design?: InstanceType<typeof EnumStoreDesignFilter>;
    @Field(() => StringFilter, {nullable:true})
    primaryColor?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    secondaryColor?: InstanceType<typeof StringFilter>;
    @Field(() => EnumFontFilter, {nullable:true})
    font?: InstanceType<typeof EnumFontFilter>;
    @Field(() => StringFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class StoreUncheckedCreateNestedManyWithoutInfluencerInput {
    @Field(() => [StoreCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => StoreCreateWithoutInfluencerInput)
    create?: Array<StoreCreateWithoutInfluencerInput>;
    @Field(() => [StoreCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => StoreCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<StoreCreateOrConnectWithoutInfluencerInput>;
    @Field(() => StoreCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => StoreCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof StoreCreateManyInfluencerInputEnvelope>;
    @Field(() => [StoreWhereUniqueInput], {nullable:true})
    @Type(() => StoreWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>>;
}

@InputType()
export class StoreUncheckedCreateWithoutInfluencerInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => StoreDesign, {nullable:false})
    design!: `${StoreDesign}`;
    @Field(() => String, {nullable:false})
    primaryColor!: string;
    @Field(() => String, {nullable:false})
    secondaryColor!: string;
    @Field(() => Font, {nullable:false})
    font!: `${Font}`;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutStoreInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutStoreInput>;
}

@InputType()
export class StoreUncheckedCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => StoreDesign, {nullable:false})
    design!: `${StoreDesign}`;
    @Field(() => String, {nullable:false})
    primaryColor!: string;
    @Field(() => String, {nullable:false})
    secondaryColor!: string;
    @Field(() => Font, {nullable:false})
    font!: `${Font}`;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class StoreUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => StoreDesign, {nullable:false})
    design!: `${StoreDesign}`;
    @Field(() => String, {nullable:false})
    primaryColor!: string;
    @Field(() => String, {nullable:false})
    secondaryColor!: string;
    @Field(() => Font, {nullable:false})
    font!: `${Font}`;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutStoreInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutStoreInput>;
}

@InputType()
export class StoreUncheckedUpdateManyWithoutInfluencerNestedInput {
    @Field(() => [StoreCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => StoreCreateWithoutInfluencerInput)
    create?: Array<StoreCreateWithoutInfluencerInput>;
    @Field(() => [StoreCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => StoreCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<StoreCreateOrConnectWithoutInfluencerInput>;
    @Field(() => [StoreUpsertWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => StoreUpsertWithWhereUniqueWithoutInfluencerInput)
    upsert?: Array<StoreUpsertWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => StoreCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => StoreCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof StoreCreateManyInfluencerInputEnvelope>;
    @Field(() => [StoreWhereUniqueInput], {nullable:true})
    @Type(() => StoreWhereUniqueInput)
    set?: Array<Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [StoreWhereUniqueInput], {nullable:true})
    @Type(() => StoreWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [StoreWhereUniqueInput], {nullable:true})
    @Type(() => StoreWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [StoreWhereUniqueInput], {nullable:true})
    @Type(() => StoreWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [StoreUpdateWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => StoreUpdateWithWhereUniqueWithoutInfluencerInput)
    update?: Array<StoreUpdateWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => [StoreUpdateManyWithWhereWithoutInfluencerInput], {nullable:true})
    @Type(() => StoreUpdateManyWithWhereWithoutInfluencerInput)
    updateMany?: Array<StoreUpdateManyWithWhereWithoutInfluencerInput>;
    @Field(() => [StoreScalarWhereInput], {nullable:true})
    @Type(() => StoreScalarWhereInput)
    deleteMany?: Array<StoreScalarWhereInput>;
}

@InputType()
export class StoreUncheckedUpdateManyWithoutInfluencerInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumStoreDesignFieldUpdateOperationsInput, {nullable:true})
    design?: InstanceType<typeof EnumStoreDesignFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    primaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    secondaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumFontFieldUpdateOperationsInput, {nullable:true})
    font?: InstanceType<typeof EnumFontFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StoreUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumStoreDesignFieldUpdateOperationsInput, {nullable:true})
    design?: InstanceType<typeof EnumStoreDesignFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    primaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    secondaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumFontFieldUpdateOperationsInput, {nullable:true})
    font?: InstanceType<typeof EnumFontFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StoreUncheckedUpdateWithoutInfluencerInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumStoreDesignFieldUpdateOperationsInput, {nullable:true})
    design?: InstanceType<typeof EnumStoreDesignFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    primaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    secondaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumFontFieldUpdateOperationsInput, {nullable:true})
    font?: InstanceType<typeof EnumFontFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutStoreNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutStoreNestedInput>;
}

@InputType()
export class StoreUncheckedUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumStoreDesignFieldUpdateOperationsInput, {nullable:true})
    design?: InstanceType<typeof EnumStoreDesignFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    primaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    secondaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumFontFieldUpdateOperationsInput, {nullable:true})
    font?: InstanceType<typeof EnumFontFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StoreUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumStoreDesignFieldUpdateOperationsInput, {nullable:true})
    design?: InstanceType<typeof EnumStoreDesignFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    primaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    secondaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumFontFieldUpdateOperationsInput, {nullable:true})
    font?: InstanceType<typeof EnumFontFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutStoreNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutStoreNestedInput>;
}

@InputType()
export class StoreUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumStoreDesignFieldUpdateOperationsInput, {nullable:true})
    design?: InstanceType<typeof EnumStoreDesignFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    primaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    secondaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumFontFieldUpdateOperationsInput, {nullable:true})
    font?: InstanceType<typeof EnumFontFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class StoreUpdateManyWithWhereWithoutInfluencerInput {
    @Field(() => StoreScalarWhereInput, {nullable:false})
    @Type(() => StoreScalarWhereInput)
    where!: InstanceType<typeof StoreScalarWhereInput>;
    @Field(() => StoreUpdateManyMutationInput, {nullable:false})
    @Type(() => StoreUpdateManyMutationInput)
    data!: InstanceType<typeof StoreUpdateManyMutationInput>;
}

@InputType()
export class StoreUpdateManyWithoutInfluencerNestedInput {
    @Field(() => [StoreCreateWithoutInfluencerInput], {nullable:true})
    @Type(() => StoreCreateWithoutInfluencerInput)
    create?: Array<StoreCreateWithoutInfluencerInput>;
    @Field(() => [StoreCreateOrConnectWithoutInfluencerInput], {nullable:true})
    @Type(() => StoreCreateOrConnectWithoutInfluencerInput)
    connectOrCreate?: Array<StoreCreateOrConnectWithoutInfluencerInput>;
    @Field(() => [StoreUpsertWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => StoreUpsertWithWhereUniqueWithoutInfluencerInput)
    upsert?: Array<StoreUpsertWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => StoreCreateManyInfluencerInputEnvelope, {nullable:true})
    @Type(() => StoreCreateManyInfluencerInputEnvelope)
    createMany?: InstanceType<typeof StoreCreateManyInfluencerInputEnvelope>;
    @Field(() => [StoreWhereUniqueInput], {nullable:true})
    @Type(() => StoreWhereUniqueInput)
    set?: Array<Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [StoreWhereUniqueInput], {nullable:true})
    @Type(() => StoreWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [StoreWhereUniqueInput], {nullable:true})
    @Type(() => StoreWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [StoreWhereUniqueInput], {nullable:true})
    @Type(() => StoreWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>>;
    @Field(() => [StoreUpdateWithWhereUniqueWithoutInfluencerInput], {nullable:true})
    @Type(() => StoreUpdateWithWhereUniqueWithoutInfluencerInput)
    update?: Array<StoreUpdateWithWhereUniqueWithoutInfluencerInput>;
    @Field(() => [StoreUpdateManyWithWhereWithoutInfluencerInput], {nullable:true})
    @Type(() => StoreUpdateManyWithWhereWithoutInfluencerInput)
    updateMany?: Array<StoreUpdateManyWithWhereWithoutInfluencerInput>;
    @Field(() => [StoreScalarWhereInput], {nullable:true})
    @Type(() => StoreScalarWhereInput)
    deleteMany?: Array<StoreScalarWhereInput>;
}

@InputType()
export class StoreUpdateOneRequiredWithoutProductsNestedInput {
    @Field(() => StoreCreateWithoutProductsInput, {nullable:true})
    @Type(() => StoreCreateWithoutProductsInput)
    create?: InstanceType<typeof StoreCreateWithoutProductsInput>;
    @Field(() => StoreCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => StoreCreateOrConnectWithoutProductsInput)
    connectOrCreate?: InstanceType<typeof StoreCreateOrConnectWithoutProductsInput>;
    @Field(() => StoreUpsertWithoutProductsInput, {nullable:true})
    @Type(() => StoreUpsertWithoutProductsInput)
    upsert?: InstanceType<typeof StoreUpsertWithoutProductsInput>;
    @Field(() => StoreWhereUniqueInput, {nullable:true})
    @Type(() => StoreWhereUniqueInput)
    connect?: Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => StoreUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => StoreUpdateToOneWithWhereWithoutProductsInput)
    update?: InstanceType<typeof StoreUpdateToOneWithWhereWithoutProductsInput>;
}

@InputType()
export class StoreUpdateToOneWithWhereWithoutProductsInput {
    @Field(() => StoreWhereInput, {nullable:true})
    @Type(() => StoreWhereInput)
    where?: InstanceType<typeof StoreWhereInput>;
    @Field(() => StoreUpdateWithoutProductsInput, {nullable:false})
    @Type(() => StoreUpdateWithoutProductsInput)
    data!: InstanceType<typeof StoreUpdateWithoutProductsInput>;
}

@InputType()
export class StoreUpdateWithWhereUniqueWithoutInfluencerInput {
    @Field(() => StoreWhereUniqueInput, {nullable:false})
    @Type(() => StoreWhereUniqueInput)
    where!: Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => StoreUpdateWithoutInfluencerInput, {nullable:false})
    @Type(() => StoreUpdateWithoutInfluencerInput)
    data!: InstanceType<typeof StoreUpdateWithoutInfluencerInput>;
}

@InputType()
export class StoreUpdateWithoutInfluencerInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumStoreDesignFieldUpdateOperationsInput, {nullable:true})
    design?: InstanceType<typeof EnumStoreDesignFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    primaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    secondaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumFontFieldUpdateOperationsInput, {nullable:true})
    font?: InstanceType<typeof EnumFontFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateManyWithoutStoreNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutStoreNestedInput>;
}

@InputType()
export class StoreUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumStoreDesignFieldUpdateOperationsInput, {nullable:true})
    design?: InstanceType<typeof EnumStoreDesignFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    primaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    secondaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumFontFieldUpdateOperationsInput, {nullable:true})
    font?: InstanceType<typeof EnumFontFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InfluencerUpdateOneRequiredWithoutStoresNestedInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerUpdateOneRequiredWithoutStoresNestedInput>;
}

@InputType()
export class StoreUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumStoreDesignFieldUpdateOperationsInput, {nullable:true})
    design?: InstanceType<typeof EnumStoreDesignFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    primaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    secondaryColor?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumFontFieldUpdateOperationsInput, {nullable:true})
    font?: InstanceType<typeof EnumFontFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => InfluencerUpdateOneRequiredWithoutStoresNestedInput, {nullable:true})
    influencer?: InstanceType<typeof InfluencerUpdateOneRequiredWithoutStoresNestedInput>;
    @Field(() => ProductUpdateManyWithoutStoreNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutStoreNestedInput>;
}

@InputType()
export class StoreUpsertWithWhereUniqueWithoutInfluencerInput {
    @Field(() => StoreWhereUniqueInput, {nullable:false})
    @Type(() => StoreWhereUniqueInput)
    where!: Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => StoreUpdateWithoutInfluencerInput, {nullable:false})
    @Type(() => StoreUpdateWithoutInfluencerInput)
    update!: InstanceType<typeof StoreUpdateWithoutInfluencerInput>;
    @Field(() => StoreCreateWithoutInfluencerInput, {nullable:false})
    @Type(() => StoreCreateWithoutInfluencerInput)
    create!: InstanceType<typeof StoreCreateWithoutInfluencerInput>;
}

@InputType()
export class StoreUpsertWithoutProductsInput {
    @Field(() => StoreUpdateWithoutProductsInput, {nullable:false})
    @Type(() => StoreUpdateWithoutProductsInput)
    update!: InstanceType<typeof StoreUpdateWithoutProductsInput>;
    @Field(() => StoreCreateWithoutProductsInput, {nullable:false})
    @Type(() => StoreCreateWithoutProductsInput)
    create!: InstanceType<typeof StoreCreateWithoutProductsInput>;
    @Field(() => StoreWhereInput, {nullable:true})
    @Type(() => StoreWhereInput)
    where?: InstanceType<typeof StoreWhereInput>;
}

@InputType()
export class StoreWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    slug?: string;
    @Field(() => [StoreWhereInput], {nullable:true})
    AND?: Array<StoreWhereInput>;
    @Field(() => [StoreWhereInput], {nullable:true})
    OR?: Array<StoreWhereInput>;
    @Field(() => [StoreWhereInput], {nullable:true})
    NOT?: Array<StoreWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => EnumStoreDesignFilter, {nullable:true})
    design?: InstanceType<typeof EnumStoreDesignFilter>;
    @Field(() => StringFilter, {nullable:true})
    primaryColor?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    secondaryColor?: InstanceType<typeof StringFilter>;
    @Field(() => EnumFontFilter, {nullable:true})
    font?: InstanceType<typeof EnumFontFilter>;
    @Field(() => StringFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => InfluencerScalarRelationFilter, {nullable:true})
    influencer?: InstanceType<typeof InfluencerScalarRelationFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
}

@InputType()
export class StoreWhereInput {
    @Field(() => [StoreWhereInput], {nullable:true})
    AND?: Array<StoreWhereInput>;
    @Field(() => [StoreWhereInput], {nullable:true})
    OR?: Array<StoreWhereInput>;
    @Field(() => [StoreWhereInput], {nullable:true})
    NOT?: Array<StoreWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => EnumStoreDesignFilter, {nullable:true})
    design?: InstanceType<typeof EnumStoreDesignFilter>;
    @Field(() => StringFilter, {nullable:true})
    primaryColor?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    secondaryColor?: InstanceType<typeof StringFilter>;
    @Field(() => EnumFontFilter, {nullable:true})
    font?: InstanceType<typeof EnumFontFilter>;
    @Field(() => StringFilter, {nullable:true})
    influencerId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => InfluencerScalarRelationFilter, {nullable:true})
    influencer?: InstanceType<typeof InfluencerScalarRelationFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
}

@ObjectType()
export class Store {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => StoreDesign, {nullable:false})
    design!: `${StoreDesign}`;
    @Field(() => String, {nullable:false})
    primaryColor!: string;
    @Field(() => String, {nullable:false})
    secondaryColor!: string;
    @Field(() => Font, {nullable:false})
    font!: `${Font}`;
    @Field(() => String, {nullable:false})
    influencerId!: string;
    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Influencer, {nullable:false})
    influencer?: InstanceType<typeof Influencer>;
    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;
}

@ArgsType()
export class UpdateManyStoreArgs {
    @Field(() => StoreUpdateManyMutationInput, {nullable:false})
    @Type(() => StoreUpdateManyMutationInput)
    data!: InstanceType<typeof StoreUpdateManyMutationInput>;
    @Field(() => StoreWhereInput, {nullable:true})
    @Type(() => StoreWhereInput)
    where?: InstanceType<typeof StoreWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneStoreArgs {
    @Field(() => StoreUpdateInput, {nullable:false})
    @Type(() => StoreUpdateInput)
    data!: InstanceType<typeof StoreUpdateInput>;
    @Field(() => StoreWhereUniqueInput, {nullable:false})
    @Type(() => StoreWhereUniqueInput)
    where!: Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>;
}

@ArgsType()
export class UpsertOneStoreArgs {
    @Field(() => StoreWhereUniqueInput, {nullable:false})
    @Type(() => StoreWhereUniqueInput)
    where!: Prisma.AtLeast<StoreWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => StoreCreateInput, {nullable:false})
    @Type(() => StoreCreateInput)
    create!: InstanceType<typeof StoreCreateInput>;
    @Field(() => StoreUpdateInput, {nullable:false})
    @Type(() => StoreUpdateInput)
    update!: InstanceType<typeof StoreUpdateInput>;
}
