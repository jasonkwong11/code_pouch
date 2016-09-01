class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :description, :upvote
end
