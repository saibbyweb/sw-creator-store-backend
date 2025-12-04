import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

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

export enum ProductScalarFieldEnum {
    id = "id",
    style = "style",
    type = "type",
    url = "url",
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

export enum MediaType {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    AUDIO = "AUDIO",
    OTHER = "OTHER"
}

export enum Font {
    MONTSERRAT = "MONTSERRAT",
    ROBOTO = "ROBOTO",
    POPPINS = "POPPINS"
}

export enum MediaScalarFieldEnum {
    id = "id",
    url = "url",
    type = "type",
    influencerId = "influencerId",
    deletedAt = "deletedAt",
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
    displayName = "displayName",
    bio = "bio",
    profilePicture = "profilePicture",
    deletedAt = "deletedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(InfluencerScalarFieldEnum, { name: 'InfluencerScalarFieldEnum', description: undefined })
registerEnumType(MediaScalarFieldEnum, { name: 'MediaScalarFieldEnum', description: undefined })
registerEnumType(Font, { name: 'Font', description: undefined })
registerEnumType(MediaType, { name: 'MediaType', description: undefined })
registerEnumType(ProductStyle, { name: 'ProductStyle', description: undefined })
registerEnumType(ProductType, { name: 'ProductType', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(Role, { name: 'Role', description: undefined })
registerEnumType(SocialPlatform, { name: 'SocialPlatform', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(StoreDesign, { name: 'StoreDesign', description: undefined })
registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
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
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId'>;
}

@ArgsType()
export class FindFirstInfluencerOrThrowArgs {
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => [InfluencerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerOrderByWithRelationInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId'>;
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
    cursor?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId'>;
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
    cursor?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId'>;
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
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId'>;
}

@ArgsType()
export class FindUniqueInfluencerArgs {
    @Field(() => InfluencerWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId'>;
}

@ArgsType()
export class InfluencerAggregateArgs {
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => [InfluencerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InfluencerOrderByWithRelationInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId'>;
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
export class InfluencerCreateNestedOneWithoutMediaInput {
    @Field(() => InfluencerCreateWithoutMediaInput, {nullable:true})
    @Type(() => InfluencerCreateWithoutMediaInput)
    create?: InstanceType<typeof InfluencerCreateWithoutMediaInput>;
    @Field(() => InfluencerCreateOrConnectWithoutMediaInput, {nullable:true})
    @Type(() => InfluencerCreateOrConnectWithoutMediaInput)
    connectOrCreate?: InstanceType<typeof InfluencerCreateOrConnectWithoutMediaInput>;
    @Field(() => InfluencerWhereUniqueInput, {nullable:true})
    @Type(() => InfluencerWhereUniqueInput)
    connect?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId'>;
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
    connect?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId'>;
}

@InputType()
export class InfluencerCreateOrConnectWithoutMediaInput {
    @Field(() => InfluencerWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId'>;
    @Field(() => InfluencerCreateWithoutMediaInput, {nullable:false})
    @Type(() => InfluencerCreateWithoutMediaInput)
    create!: InstanceType<typeof InfluencerCreateWithoutMediaInput>;
}

@InputType()
export class InfluencerCreateOrConnectWithoutStoresInput {
    @Field(() => InfluencerWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId'>;
    @Field(() => InfluencerCreateWithoutStoresInput, {nullable:false})
    @Type(() => InfluencerCreateWithoutStoresInput)
    create!: InstanceType<typeof InfluencerCreateWithoutStoresInput>;
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
    connect?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId'>;
    @Field(() => InfluencerUpdateToOneWithWhereWithoutMediaInput, {nullable:true})
    @Type(() => InfluencerUpdateToOneWithWhereWithoutMediaInput)
    update?: InstanceType<typeof InfluencerUpdateToOneWithWhereWithoutMediaInput>;
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
    connect?: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId'>;
    @Field(() => InfluencerUpdateToOneWithWhereWithoutStoresInput, {nullable:true})
    @Type(() => InfluencerUpdateToOneWithWhereWithoutStoresInput)
    update?: InstanceType<typeof InfluencerUpdateToOneWithWhereWithoutStoresInput>;
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
export class InfluencerUpdateToOneWithWhereWithoutStoresInput {
    @Field(() => InfluencerWhereInput, {nullable:true})
    @Type(() => InfluencerWhereInput)
    where?: InstanceType<typeof InfluencerWhereInput>;
    @Field(() => InfluencerUpdateWithoutStoresInput, {nullable:false})
    @Type(() => InfluencerUpdateWithoutStoresInput)
    data!: InstanceType<typeof InfluencerUpdateWithoutStoresInput>;
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
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId'>;
}

@ArgsType()
export class UpsertOneInfluencerArgs {
    @Field(() => InfluencerWhereUniqueInput, {nullable:false})
    @Type(() => InfluencerWhereUniqueInput)
    where!: Prisma.AtLeast<InfluencerWhereUniqueInput, 'id' | 'username' | 'email' | 'stripeAccountId'>;
    @Field(() => InfluencerCreateInput, {nullable:false})
    @Type(() => InfluencerCreateInput)
    create!: InstanceType<typeof InfluencerCreateInput>;
    @Field(() => InfluencerUpdateInput, {nullable:false})
    @Type(() => InfluencerUpdateInput)
    update!: InstanceType<typeof InfluencerUpdateInput>;
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
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
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
    url!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
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
    url!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
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
    url!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
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
    url!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
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
    url!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
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
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
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
export class MediaMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
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
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    influencerId?: `${SortOrder}`;
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
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
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
    url?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumMediaTypeWithAggregatesFilter, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeWithAggregatesFilter>;
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
    url?: InstanceType<typeof StringFilter>;
    @Field(() => EnumMediaTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFilter>;
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
    url!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
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
    url!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
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
export class MediaUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
    @Field(() => String, {nullable:false})
    influencerId!: string;
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
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
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
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
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
export class MediaUncheckedUpdateWithoutInfluencerInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
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
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
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
export class MediaUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    influencerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
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
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
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
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
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
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFieldUpdateOperationsInput>;
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
    url?: InstanceType<typeof StringFilter>;
    @Field(() => EnumMediaTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFilter>;
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
    url?: InstanceType<typeof StringFilter>;
    @Field(() => EnumMediaTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumMediaTypeFilter>;
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
export class Media {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;
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
export class AggregateInfluencerRawArgs {
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

@ArgsType()
export class FindInfluencerRawArgs {
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
export class FindStoreRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
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
    @Field(() => ProductMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductMaxOrderByAggregateInput>;
    @Field(() => ProductMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductMinOrderByAggregateInput>;
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
