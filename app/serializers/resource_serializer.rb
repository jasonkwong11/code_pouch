class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :description, :upvote, :category, :created_at
end
