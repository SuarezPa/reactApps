variable "resource_group_name" {
  type        = string
  description = "Nombre del Resource Group"
}

variable "location" {
  type        = string
  description = "Región de Azure"
  default     = "East US"
}

variable "cosmos_account_name" {
  type        = string
  description = "Nombre de la cuenta Cosmos DB (único global)"
}

variable "database_name" {
  type        = string
  description = "Nombre de la base de datos Cosmos"
}

variable "container_name" {
  type        = string
  description = "Nombre del contenedor"
}

variable "partition_key" {
  type        = string
  description = "Partition key path"
  default     = "/id"
}


