class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :description, :upvote, :created_at
end
