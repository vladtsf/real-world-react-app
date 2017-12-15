export type User = {
  id: Number,
  name: String,
};

export type Profile = {
  id: Number,
  name: String,
  company: String,
};

export type List = {
  id: Number,
  name: String,
};

export type StatusType = ('add_to_list' | 'like' | 'send_email');

export type Status = {
  id: Number,
  type: StatusType,
  subject: User,
  object: Profile,
  list?: List,
};

export type FilterCounters = {
  all: Number,
  outreach: Number,
};
