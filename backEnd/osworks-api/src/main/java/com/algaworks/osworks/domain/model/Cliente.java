package com.algaworks.osworks.domain.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.algaworks.osworks.domain.ValidationGroups;


@Entity
public class Cliente {
	
	@NotNull(groups = ValidationGroups.ClienteId.class)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_cliente;
	
	
	@NotBlank
	@Size(max = 18)
	private String cpfCnpj;
	
	@NotBlank
	@Size(max = 60)
	private String descricao;
	
	@NotBlank
	@Email
	@Size(max = 255)
	private String email;
	
	@NotNull
	@Enumerated(EnumType.STRING)
	private tipoCliente tipo;

	public Long getId_cliente() {
		return id_cliente;
	}

	public void setId_cliente(Long id_cliente) {
		this.id_cliente = id_cliente;
	}

	public String getCpfCnpj() {
		return cpfCnpj;
	}

	public void setCpf_cnpj(String cpfCnpj) {
		this.cpfCnpj = cpfCnpj;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public tipoCliente getTipo() {
		return tipo;
	}

	public void setTipo(tipoCliente tipo) {
		this.tipo = tipo;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id_cliente == null) ? 0 : id_cliente.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cliente other = (Cliente) obj;
		if (id_cliente == null) {
			if (other.id_cliente != null)
				return false;
		} else if (!id_cliente.equals(other.id_cliente))
			return false;
		return true;
	}
	
	
	
}
