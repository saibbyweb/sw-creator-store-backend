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

export enum SortOrder {
    asc = "asc",
    desc = "desc"
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

export enum InfluencerScalarFieldEnum {
    id = "id",
    name = "name",
    username = "username",
    email = "email",
    password = "password",
    role = "role",
    countryCode = "countryCode",
    phoneNumber = "phoneNumber",
    stripeAccountId = "stripeAccountId",
    stripeOnboardingComplete = "stripeOnboardingComplete",
    chargesEnabled = "chargesEnabled",
    payoutsEnabled = "payoutsEnabled",
    detailsSubmitted = "detailsSubmitted",
    stripeAccountType = "stripeAccountType",
    deletedAt = "deletedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(InfluencerScalarFieldEnum, { name: 'InfluencerScalarFieldEnum', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(Role, { name: 'Role', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })

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
    stripeAccountId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeOnboardingComplete?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    chargesEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    payoutsEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    detailsSubmitted?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeAccountType?: `${SortOrder}`;
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
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
    stripeAccountId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeOnboardingComplete?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    chargesEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    payoutsEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    detailsSubmitted?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeAccountType?: `${SortOrder}`;
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
    stripeAccountId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeOnboardingComplete?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    chargesEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    payoutsEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    detailsSubmitted?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeAccountType?: `${SortOrder}`;
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
    stripeAccountId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeOnboardingComplete?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    chargesEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    payoutsEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    detailsSubmitted?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeAccountType?: `${SortOrder}`;
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
    @Field(() => SortOrder, {nullable:true})
    stripeAccountId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeOnboardingComplete?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    chargesEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    payoutsEnabled?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    detailsSubmitted?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    stripeAccountType?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
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
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    stripeAccountId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    stripeAccountType?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
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
    @Field(() => String, {nullable:true})
    stripeAccountId?: string;
    @Field(() => Boolean, {nullable:true})
    stripeOnboardingComplete?: boolean;
    @Field(() => Boolean, {nullable:true})
    chargesEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    payoutsEnabled?: boolean;
    @Field(() => Boolean, {nullable:true})
    detailsSubmitted?: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountType?: string;
    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
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
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
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
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
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
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    stripeOnboardingComplete?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    chargesEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payoutsEnabled?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    detailsSubmitted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stripeAccountType?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
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
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
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
    @Field(() => StringNullableFilter, {nullable:true})
    stripeAccountId?: InstanceType<typeof StringNullableFilter>;
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
    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
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
    @Field(() => String, {nullable:true})
    stripeAccountId!: string | null;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    stripeOnboardingComplete!: boolean;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    chargesEnabled!: boolean;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    payoutsEnabled!: boolean;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    detailsSubmitted!: boolean;
    @Field(() => String, {nullable:true})
    stripeAccountType!: string | null;
    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
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

@ArgsType()
export class FindInfluencerRawArgs {
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
